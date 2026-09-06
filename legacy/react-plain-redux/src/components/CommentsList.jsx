// components/CommentsList.jsx
import React from 'react';
import PropTypes from 'prop-types';

const CommentsList = ({ comments }) => (
  <div className="section">
    <h4>Comments</h4>
    <ul className="list">
      {comments.map((comment) => (
        <li key={comment.id} className="comment">
          <strong>{comment.name}</strong>
          <div className="muted">{comment.email}</div>
          <div>{comment.body}</div>
        </li>
      ))}
    </ul>
  </div>
);

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentsList;
