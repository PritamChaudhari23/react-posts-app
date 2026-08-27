import Navbar from "../Navbar/Navbar";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const AppbarComponent = (props) => {
  const { showSideDrawer, toggleDrawer } = props;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        id="app-appbar"
        className="app-appbar"
        position="static"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            {showSideDrawer ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          FriendsNet
        </Typography>

        <Navbar />
      </AppBar>
    </Box>
  );
};

export default AppbarComponent;
