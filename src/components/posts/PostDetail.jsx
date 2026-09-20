import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Page from "../app/page/Page";
import Post from "./Post";
import { setCurrentPostId } from "../../store/slices/postsSlice";

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const post = useSelector((state) =>
    state.posts.posts.list.find((p) => p.id === Number(id)),
  );
  const author = useSelector((state) => {
    const authorId = post?.userId;
    return authorId ? state.users.users.byId[authorId] : null;
  });
  const comments = useSelector((state) => state.comments.comments.list);
  const commentsLoading = useSelector(
    (state) => state.comments.comments.loading,
  );

  useEffect(() => {
    if (post) {
      dispatch(setCurrentPostId({ postId: post.id, authorId: post.userId }));
    }
  }, [dispatch, post]);

  if (!post) {
    return (
      <Page title="Post">
        <Typography align="center">
          Post not found — go back to the list.
        </Typography>
      </Page>
    );
  }

  return (
    <Page title="Post">
      <Post post={post} clickable={false} />

      {author && (
        <Box sx={{ maxWidth: 800, margin: "auto", mt: 2 }}>
          <Typography variant="subtitle1">
            By {author.firstName} {author.lastName}
          </Typography>
        </Box>
      )}

      <Box sx={{ maxWidth: 800, margin: "auto", mt: 3 }}>
        <Typography variant="h6">Comments</Typography>
        {commentsLoading ? (
          <CircularProgress size={24} />
        ) : (
          <List>
            {comments.map((comment) => (
              <ListItem key={comment.id} alignItems="flex-start">
                <ListItemText
                  primary={comment.body}
                  secondary={comment.user?.fullName}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Page>
  );
};

export default PostDetail;
