import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { likePost } from "../../store/slices/postsSlice";

const Post = ({ post, clickable = true }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const liked = useSelector((state) =>
    state.posts.likedPostIds.includes(post.id),
  );

  const handleLike = (e) => {
    e.stopPropagation();
    dispatch(likePost(post.id));
  };

  const handleOpen = () => {
    if (clickable) navigate(`/posts/${post.id}`);
  };

  return (
    <Card
      elevation={3}
      sx={{
        maxWidth: 800,
        margin: "auto",
        marginY: 2,
        cursor: clickable ? "pointer" : "default",
      }}
      onClick={handleOpen}
    >
      <CardHeader title={post.title} subheader={`Views: ${post.views}`} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.body}
        </Typography>
        {post.tags?.map((tag) => (
          <Chip sx={{ m: 0.5 }} key={tag} label={tag} color="primary" />
        ))}
      </CardContent>
      <CardActions>
        <IconButton onClick={handleLike} color={liked ? "primary" : "default"}>
          <ThumbUpIcon />
        </IconButton>
        <span>{post.reactions.likes}</span>
        <ThumbDownIcon color="action" sx={{ ml: 2 }} />
        <span>{post.reactions.dislikes}</span>
      </CardActions>
    </Card>
  );
};

export default Post;
