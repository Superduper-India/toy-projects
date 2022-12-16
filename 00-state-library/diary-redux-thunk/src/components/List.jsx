import React from 'react';

import { Link } from 'react-router-dom';

// posts 배열을 받는다.
export default function List({ posts }) {
  return (
    <>
      <ul>
        {posts.map(post => (
          <li key={post.id} >
            <h2>{post.title}</h2>
            <Link to={`/detail/${post.id}`}>
              See More
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
