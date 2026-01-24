import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AppPage from "../../components/AppPage/AppPage";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsAction } from "../../../slices/postsSlice";
import { Box, Typography } from "@mui/material";

const UserPostsList = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const posts = useSelector((state) => state.posts.data);
  const users = useSelector((state) => state.users.data);
  const loading = useSelector((state) => state.posts.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsAction());
  }, [dispatch]);

  const user = users && users.find((u) => u.id === parseInt(userId));
  const userPosts = posts && posts.filter((post) => post.userId === parseInt(userId));

  if (!user) {
    return (
      <AppPage title="Posts" description="User posts">
        <Typography variant="h6" sx={{ color: "#666" }}>
          User not found
        </Typography>
      </AppPage>
    );
  }

  return (
    <AppPage
      title={`${user.name}'s Posts`}
      description={`Posts by ${user.name}`}
    >
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ color: "#1976d2", fontWeight: 600 }}>
          Viewing posts by: <strong>{user.name}</strong>
        </Typography>
      </Box>
      <div>
        {userPosts && userPosts.length > 0 ? (
          userPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))
        ) : (
          <Typography variant="body1" sx={{ color: "#999" }}>
            No posts found for this user.
          </Typography>
        )}
      </div>
    </AppPage>
  );
};

export default UserPostsList;
