/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import ArticleList from '../components/ArticleList';
import { useState } from 'react';

export default function Home({ posts }) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <main className="container-home">
      <section className="search-section">
        <label htmlFor="search">Search </label>
        <input
          className="search-section__search"
          type="text"
          id="search"
          placeholder="Post Title"
          onChange={(Event) => {
            setSearchTerm(Event.target.value);
          }}
        />
      </section>
      <section className="tags-section">{}</section>
      <ArticleList posts={posts} searchTerm={searchTerm} />
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.BASE_URL}/posts?_sort=published_at:DESC&_start=0&_limit=100`
  );

  // data array from res
  const posts = await res.json();

  return {
    props: { posts },
  };
}
