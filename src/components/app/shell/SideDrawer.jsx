import { Link } from "react-router-dom";
import "../appPage.scss";

const SideDrawer = () => {
  return (
    <aside id="app-sidebar" className="app-sidebar">
      <Link to="/">Posts</Link>
      <Link to="/friends">Friends</Link>
    </aside>
  );
};

export default SideDrawer;
