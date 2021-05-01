import React from 'react';
import Link from 'next/link';

const ArticleList = ({ posts, searchTerm }) => {
  const options = {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  };

  return (
    <section className="posts-section">
      <h1 className="posts-section__intro-header">RECENT POSTS</h1>
      {posts &&
        posts
          .filter((post) => {
            if (searchTerm === '') return post;
            if (post.Title.toLowerCase().includes(searchTerm.toLowerCase())) {
              return post;
            }
          })
          .map((post) => (
            <article className="posts-section__post" key={post.id}>
              <Link href={`/posts/${post.Slug}`}>
                <a className="posts-section__post__link">{post.Title}</a>
              </Link>
              <h2>
                By {post.User.username} on &#8201;
                <span className="posts-section__date">
                  {new Intl.DateTimeFormat('en-US', options).format(
                    new Date(post.published_at)
                  )}
                </span>
              </h2>
              <h3 className="posts-section__post__tag">
                {post.tag.split('_').join(' ')}
              </h3>
              <h2 className="posts-section__post__desc">{post.description}</h2>
            </article>
          ))}
    </section>
  );
};

export default ArticleList;
