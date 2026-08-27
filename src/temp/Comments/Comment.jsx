import { Card, CardContent, Typography, Box, Avatar } from "@mui/material";

const Comment = ({ comment, index = 0 }) => {
  return (
    <Card
      sx={{
        marginBottom: 2,
        border: "1px solid #e0e0e0",
        borderRadius: 2,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.12)",
          transform: "translateX(4px)",
        },
      }}
    >
      <CardContent sx={{ textAlign: "left", padding: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
          <Avatar
            sx={{
              width: 36,
              height: 36,
              marginRight: 1.5,
              backgroundColor: "#1976d2",
              fontSize: "14px",
            }}
          >
            {(index + 1).toString().padStart(2, "0")}
          </Avatar>
          <Box>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 600,
                color: "#1976d2",
              }}
            >
              {comment.name}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "#9e9e9e",
              }}
            >
              {comment.email}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ marginLeft: 5.5, marginTop: 2 }}>
          <Typography
            variant="body2"
            sx={{
              color: "#555",
              lineHeight: 1.6,
              padding: "12px",
              backgroundColor: "#f5f5f5",
              borderRadius: 1,
              borderLeft: "4px solid #1976d2",
            }}
          >
            {comment.body}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Comment;
