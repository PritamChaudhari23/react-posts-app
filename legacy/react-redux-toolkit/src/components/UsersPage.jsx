// components/UsersPage.jsx
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/usersSlice';
import { fetchPosts } from '../store/postsSlice';
import PostsList from './PostsList';

const UsersPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);
  const [activeUser, setActiveUser] = useState(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const onUserClick = (userId) => {
    setActiveUser(userId);
    dispatch(fetchPosts(userId));
  };

  return (
    <div className="container">
      <div className="section">
        <h2>Users</h2>
        <ul className="list">
          {users.map((u) => (
            <li
              key={u.id}
              className={`list-item ${activeUser === u.id ? 'active' : ''}`}
              onClick={() => onUserClick(u.id)}
            >
              {u.name}
              <div className="muted">{u.email}</div>
            </li>
          ))}
        </ul>
      </div>

      <PostsList />
    </div>
  );
};

export default UsersPage;
