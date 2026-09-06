// components/UsersList.jsx
import React from 'react';
import PropTypes from 'prop-types';

const UsersList = ({ users, onUserClick }) => (
  <div className="section">
    <h2>Users</h2>
    <ul className="list">
      {users.map((user) => (
        <li
          key={user.id}
          className="list-item"
          onClick={() => onUserClick(user.id)}
        >
          {user.name}
          <div className="muted">{user.email}</div>
        </li>
      ))}
    </ul>
  </div>
);

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
  onUserClick: PropTypes.func.isRequired,
};

export default UsersList;
