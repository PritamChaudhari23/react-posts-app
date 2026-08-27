import { Typography, Box } from "@mui/material";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  if (!comments || (Array.isArray(comments) && comments.length === 0)) {
    return (
      <Typography color="textSecondary" sx={{ padding: 2, textAlign: "center" }}>
        No comments yet
      </Typography>
    );
  }

  const commentsList = Array.isArray(comments) ? comments : [];

  return (
    <Box>
      {commentsList.map((comment, index) => (
        <Comment key={comment.id} comment={comment} index={index} />
      ))}
    </Box>
  );
};

export default CommentsList;
