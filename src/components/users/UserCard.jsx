import { Card, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const UserCard = ({ user }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleViewPosts = () => {
    navigate(`/users/${user.id}/posts`);
  };

  return (
    <Card variant="outlined" sx={{ p: 1 }}>
      <CardContent sx={{ textAlign: "left" }}>
        <Typography variant="h6">
          {user.firstName} {user.lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          @{user.username}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {user.email}
        </Typography>
        {user.phone && (
          <Typography variant="body2" color="text.secondary">
            {user.phone}
          </Typography>
        )}
        {user.company?.name && (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {user.company.name}
          </Typography>
        )}
        <Button
          variant="outlined"
          fullWidth
          onClick={handleViewPosts}
          sx={{ mt: 2 }}
        >
          {t("users.viewPosts")}
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserCard;
