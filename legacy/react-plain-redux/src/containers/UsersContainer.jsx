// containers/UsersContainer.jsx
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { fetchUsers } from '../store/actions/usersActions';
import { fetchPosts } from '../store/actions/postsActions';
import { selectUsers } from '../store/selectors/usersSelectors';
import UsersList from '../components/UsersList';

const UsersContainer = ({ users, fetchUsers, fetchPosts }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return <UsersList users={users} onUserClick={fetchPosts} />;
};

UsersContainer.propTypes = {
  users: PropTypes.array.isRequired,
  fetchUsers: PropTypes.func.isRequired,
  fetchPosts: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  users: selectUsers,
});

const mapDispatchToProps = {
  fetchUsers,
  fetchPosts,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  UsersContainer
);
