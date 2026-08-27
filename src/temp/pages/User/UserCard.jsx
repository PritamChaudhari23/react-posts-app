import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  const handleViewPosts = () => {
    navigate(`/users/${user.id}/posts`);
  };

  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
          transform: "translateY(-4px)",
        },
        border: "1px solid #e0e0e0",
        overflow: "hidden",
      }}
    >
      <CardContent sx={{ textAlign: "left" }}>
        {/* Header with icon and name */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <PersonIcon sx={{ color: "#1976d2", mr: 1.5, fontSize: 28 }} />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#1976d2",
              wordBreak: "break-word",
            }}
          >
            {user.name}
          </Typography>
        </Box>

        {/* Username */}
        <Box sx={{ mb: 1.5, pl: 4.5 }}>
          <Typography
            variant="body2"
            sx={{
              color: "#666",
              fontWeight: 500,
            }}
          >
            @{user.username}
          </Typography>
        </Box>

        {/* Email */}
        <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1.5 }}>
          <EmailIcon sx={{ color: "#757575", mr: 1, fontSize: 20 }} />
          <Typography
            variant="body2"
            sx={{
              color: "#555",
              wordBreak: "break-word",
            }}
          >
            {user.email}
          </Typography>
        </Box>

        {/* Phone */}
        <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1.5 }}>
          <PhoneIcon sx={{ color: "#757575", mr: 1, fontSize: 20 }} />
          <Typography
            variant="body2"
            sx={{
              color: "#555",
            }}
          >
            {user.phone}
          </Typography>
        </Box>

        {/* Website */}
        {user.website && (
          <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
            <LanguageIcon sx={{ color: "#757575", mr: 1, fontSize: 20 }} />
            <Typography
              variant="body2"
              sx={{
                color: "#1976d2",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => window.open(`https://${user.website}`, "_blank")}
            >
              {user.website}
            </Typography>
          </Box>
        )}

        {/* Company */}
        {user.company && (
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="body2"
              sx={{
                color: "#666",
                fontWeight: 600,
                mb: 0.5,
              }}
            >
              Company: {user.company.name}
            </Typography>
          </Box>
        )}

        {/* Action Button */}
        <Button
          variant="contained"
          fullWidth
          onClick={handleViewPosts}
          sx={{
            mt: 2,
            background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
            "&:hover": {
              background: "linear-gradient(135deg, #1565c0 0%, #1565c0 100%)",
            },
            fontWeight: 600,
          }}
        >
          View Posts
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserCard;
