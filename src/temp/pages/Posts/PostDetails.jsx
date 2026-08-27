import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentForPostAction } from "../../../slices/commentsSlice";
import AppPage from "../../components/AppPage/AppPage";
import { Card, CardContent, Typography, Box, CircularProgress } from "@mui/material";
import CommentsList from "../Comments/CommentsList";

const PostDetails = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.data);
  const comments = useSelector((state) => state.comments.data);
  const commentsLoading = useSelector((state) => state.comments.loading);

  useEffect(() => {
    dispatch(fetchCommentForPostAction(id));
  }, [id, dispatch]);

  const currentPost = posts && posts.find((post) => post.id === parseInt(id));

  return (
    <AppPage title="Post Details" description="View post and its comments">
      {currentPost ? (
        <Box sx={{ maxWidth: "800px", margin: "0 auto" }}>
          {/* Post Details Card */}
          <Card
            sx={{
              marginBottom: 3,
              border: "3px solid #1976d2",
              borderRadius: 2,
              boxShadow: "0 6px 16px rgba(0, 0, 0, 0.12)",
            }}
          >
            <CardContent sx={{ textAlign: "left" }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  color: "#1976d2",
                  marginBottom: 2,
                  borderBottom: "2px solid #e0e0e0",
                  paddingBottom: 1.5,
                }}
              >
                {currentPost.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#424242",
                  lineHeight: 1.8,
                  fontSize: "16px",
                  marginBottom: 2,
                }}
              >
                {currentPost.body}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "#9e9e9e",
                  display: "block",
                  marginTop: 2,
                }}
              >
                Post ID: {currentPost.id}
              </Typography>
            </CardContent>
          </Card>

          {/* Comments Section */}
          <Box sx={{ marginTop: 3 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                color: "#1976d2",
                marginBottom: 2,
              }}
            >
              Comments
            </Typography>
            {commentsLoading ? (
              <Box sx={{ display: "flex", justifyContent: "center", padding: 3 }}>
                <CircularProgress />
              </Box>
            ) : (
              <CommentsList comments={comments} />
            )}
          </Box>
        </Box>
      ) : (
        <Typography color="error">Post not found</Typography>
      )}
    </AppPage>
  );
};

export default PostDetails;
