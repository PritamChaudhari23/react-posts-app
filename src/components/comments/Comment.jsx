import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

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
    <Card elevation={3} sx={{ maxWidth: 800, margin: "auto", marginX: 4 }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {comment.body}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          By {comment.user.fullName}
        </Typography>
      </CardContent>
      <CardActions>
        <ThumbUpIcon color="action" />
        <span>{comment.likes}</span>
      </CardActions>
    </Card>
  );
};

export default Comment;
