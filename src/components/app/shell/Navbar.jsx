import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../page.scss";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav id="app-navbar" className="app-navbar">
      <Link to="/addpost">{t("nav.addPost")}</Link> |
      <Link to="/myposts">{t("nav.myPosts")}</Link> |
      <Link to="/users">{t("nav.users")}</Link>
    </nav>
  );
};

export default Navbar;
