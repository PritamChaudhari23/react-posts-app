import React, { useState } from "react";
import "../app/appPage.scss";

const Post = () => {
  const [post, setPost] = useState({
    id: 1,
    title: "His mother had always taught him",
    body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    tags: ["history", "american", "crime"],
    reactions: {
      likes: 192,
      dislikes: 25,
    },
    views: 305,
    userId: 121,
  });

  return (
    <article className="post">
      <h5>{post.title}</h5>
      <p>{post.body}</p>
      <div className="reactions">
        <span>👍 {post.reactions.likes}</span>
        <span>👎 {post.reactions.dislikes}</span>
        <span>Views: {post.views}</span>
      </div>
      <div className="tags">
        {post.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
};

export default Post;
