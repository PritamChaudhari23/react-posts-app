import { useEffect } from "react";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { fetchPostsAction } from "../../../../slices/postsSlice";

const Post = ({ post }) => {
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
