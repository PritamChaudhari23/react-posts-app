import { Typography, Card, CardContent, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePostClick = () => {
    navigate(`/posts/${encodeURIComponent(post.id)}`);
  };

  return (
    <Card
      onClick={handlePostClick}
      sx={{
        marginBottom: 2,
        border: "2px solid #1976d2",
        borderRadius: 2,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
        cursor: "pointer",
        "&:hover": {
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
          transform: "translateY(-2px)",
        },
      }}
    >
      <CardContent sx={{ textAlign: "left" }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: 600,
            color: "#1976d2",
            marginBottom: 1.5,
          }}
        >
          {post.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#555",
            lineHeight: 1.6,
          }}
        >
          {post.body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
