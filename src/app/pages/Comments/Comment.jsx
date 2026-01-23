import Typography from "@mui/material/Typography";

const Comment = ({ comment }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        {`Comment for post: ${comment.postId}`}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {comment.body}
      </Typography>
    </div>
  );
};

export default Comment;
