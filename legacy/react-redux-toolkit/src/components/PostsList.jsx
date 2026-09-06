// components/PostsList.jsx
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../store/commentsSlice';
import { useState } from 'react';
import CommentsList from './CommentsList';

const PostsList = () => {
  const posts = useSelector((state) => state.posts.list);
  const dispatch = useDispatch();
  const [activePost, setActivePost] = useState(null);

  if (!posts.length) return null;

  const onPostClick = (postId) => {
    setActivePost(postId);
    dispatch(fetchComments(postId));
  };

  return (
    <div className="section">
      <h3>Posts</h3>
      <ul className="list">
        {posts.map((p) => (
          <li
            key={p.id}
            className={`list-item ${activePost === p.id ? 'active' : ''}`}
            onClick={() => onPostClick(p.id)}
          >
            <strong>{p.title}</strong>
            <div className="muted">{p.body.slice(0, 80)}...</div>
          </li>
        ))}
      </ul>

      <CommentsList />
    </div>
  );
};

export default PostsList;
