import { FC } from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";

const SideDrawer: FC = () => {
  return (
    <aside id="app-sidebar" className="app-sidebar">
      <Link to="/">Posts</Link>
      <Link to="/friends">Friends</Link>
      <Link to="/memories">Memories</Link>
      <Link to="/interests">Interests</Link>
      <Link to="/places">Places</Link>
      <Link to="/events">Events</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/settings">Settings & Privacy</Link>
      <Link to="/help">Help & Support</Link>
      <Link to="/logout">Logout</Link>
    </aside>
  );
};

export default SideDrawer;

// const sideMenuItems = [
//   {
//     icon: <FeedIcon />,
//     text: "Posts",
//   },
//   {
//     icon: <PeopleIcon />,
//     text: "Friends",
//   },
//   {
//     icon: <PhotoLibraryIcon />,
//     text: "Memories",
//   },
//   {
//     icon: <InterestsIcon />,
//     text: "Interests",
//   },
//   {
//     icon: <ApartmentIcon />,
//     text: "Places",
//   },
//   {
//     icon: <EventIcon />,
//     text: "Events",
//   },
//   {
//     icon: <AccountBoxIcon />,
//     text: "Profile",
//   },
//   {
//     icon: <SettingsIcon />,
//     text: "Settings & Privacy",
//   },
//   {
//     icon: <HelpCenterIcon />,
//     text: "Help & Support",
//   },
//   {
//     icon: <LogoutIcon />,
//     text: "Logout",
//   },
// ];
