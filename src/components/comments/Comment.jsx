import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Comment = ({ comment }) => {
  return (
    <ListItem alignItems="flex-start" divider>
      <ListItemText
        primary={comment.body}
        secondary={
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 0.5 }}
          >
            <Typography variant="caption" color="text.secondary">
              By {comment.user?.fullName}
            </Typography>
          </Box>
        }
      />
      <ListItemIcon
        sx={{
          minWidth: "auto",
          display: "flex",
          alignItems: "center",
          gap: 0.5,
        }}
      >
        <ThumbUpIcon color="action" fontSize="small" />
        <Typography variant="caption">{comment.likes}</Typography>
      </ListItemIcon>
    </ListItem>
  );
};

export default Comment;
