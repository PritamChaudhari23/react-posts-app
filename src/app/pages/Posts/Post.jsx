import { FC, useEffect } from "react";
import { PostType } from "../../../../types/Post";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { fetchPostsAction } from "../../../../slices/postsSlice";

interface PostProps {
  post: PostType;
}

const Post: FC<PostProps> = ({ post }) => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    await dispatch(fetchPostsAction());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {post.body}
      </Typography>
    </div>
  );
};

export default Post;
