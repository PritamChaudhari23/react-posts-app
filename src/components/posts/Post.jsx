import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

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
    <Card elevation={3} sx={{ maxWidth: 800, margin: "auto", marginX: 4 }}>
      <CardHeader title={post.title} subheader={`Views: ${post.views}`} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.body}
        </Typography>
        {post.tags.map((tag) => (
          <Chip sx={{ m: 0.5 }} key={tag} label={tag} color="primary" />
        ))}
      </CardContent>
      <CardActions>
        <ThumbUpIcon color="action" />
        <span>{post.reactions.likes}</span>
        <ThumbDownIcon color="action" />
        <span>{post.reactions.dislikes}</span>
      </CardActions>
    </Card>
  );
};

export default Post;
