import React from 'react';
import Link from 'next/link';
import marked from 'marked';

const Post = ({ post }) => {
  // date options
  const options = {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  };

  // see https://reactjs.org/docs/dom-elements.html for more info
  const getMarkdownText = () => {
    const rawMarkup = marked(post.Content, {
      sanitize: true,
    });
    return { __html: rawMarkup };
  };

  return (
    <main className="post-page">
      <div className="post-page__content">
        <h1>{post.Title}</h1>
        <h2>
          By {post.User.username} on &#8201;
          <span className="posts-section__date">
            {new Intl.DateTimeFormat('en-US', options).format(
              new Date(post.published_at)
            )}
          </span>
        </h2>
        <div dangerouslySetInnerHTML={getMarkdownText()} />
      </div>
      <section className="post-footer">
        <Link href="/">
          <a className="post-footer__link">&lArr; Back</a>
        </Link>
        <a href="#">&#8627; Top</a>
      </section>
    </main>
  );
};

export default Post;

// tell nextjs how many pages there are
export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL}/posts`);
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: {
      slug: post.Slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

// for each indiv page, get the data for that page
export async function getStaticProps({ params }) {
  const { slug } = params;
  const data = await (
    await fetch(`${process.env.BASE_URL}/posts?Slug=${slug}`)
  ).json();

  const post = data[0];
  return {
    props: { post },
  };
}
