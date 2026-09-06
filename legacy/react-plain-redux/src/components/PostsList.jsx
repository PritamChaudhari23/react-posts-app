// components/PostsList.jsx
import React from 'react';
import PropTypes from 'prop-types';

const PostsList = ({ posts, onPostClick }) => (
  <div className="section">
    <h3>Posts</h3>
    <ul className="list">
      {posts.map((post) => (
        <li
          key={post.id}
          className="list-item"
          onClick={() => onPostClick(post.id)}
        >
          <strong>{post.title}</strong>
          <div className="muted">{post.body.slice(0, 80)}...</div>
        </li>
      ))}
    </ul>
  </div>
);

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
  onPostClick: PropTypes.func.isRequired,
};

export default PostsList;
