// containers/CommentsContainer.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectComments } from '../store/selectors/commentsSelectors';
import CommentsList from '../components/CommentsList';

const CommentsContainer = ({ comments }) => {
  if (!comments.length) return null;
  return <CommentsList comments={comments} />;
};

CommentsContainer.propTypes = {
  comments: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  comments: selectComments,
});

export default connect(mapStateToProps)(CommentsContainer);
