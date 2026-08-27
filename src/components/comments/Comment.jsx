import React, { useState } from "react";
import "../styles/page.scss";

const Comment = () => {
  const [comment, setComment] = useState({
    id: 1,
    body: "This is some awesome thinking!",
    postId: 242,
    likes: 3,
    user: {
      id: 105,
      username: "emmac",
      fullName: "Emma Wilson",
    },
  });

  return (
    <section className="unit">
      <p className="comment-body">{comment.body}</p>
      <p className="byline">By {comment.user.fullName}</p>
      <span className="comment-likes">👍 {comment.likes}</span>
    </section>
  );
};

export default Comment;
