import { FC } from "react";
import { CommentType } from "../../../../types/Comment";
import Typography from "@mui/material/Typography";

interface CommentProps {
  comment: CommentType;
}

const Comment: FC<CommentProps> = ({ comment }) => {
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
