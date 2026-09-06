// containers/PostsContainer.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchComments } from '../store/actions/commentsActions';
import { selectPosts } from '../store/selectors/postsSelectors';
import PostsList from '../components/PostsList';

const PostsContainer = ({ posts, fetchComments }) => {
  if (!posts.length) return null;
  return <PostsList posts={posts} onPostClick={fetchComments} />;
};

PostsContainer.propTypes = {
  posts: PropTypes.array.isRequired,
  fetchComments: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  posts: selectPosts,
});

const mapDispatchToProps = {
  fetchComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
