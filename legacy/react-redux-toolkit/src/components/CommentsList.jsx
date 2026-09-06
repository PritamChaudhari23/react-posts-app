// components/CommentsList.jsx
import { useSelector } from 'react-redux';

const CommentsList = () => {
  const comments = useSelector((state) => state.comments.list);

  if (!comments.length) return null;

  return (
    <div className="section">
      <h4>Comments</h4>
      <ul className="list">
        {comments.map((c) => (
          <li key={c.id} className="comment">
            <strong>{c.name}</strong>
            <div className="muted">{c.email}</div>
            <div>{c.body}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
