import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../page.scss";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav id="app-navbar" className="app-navbar">
      <Link to="/posts">{t("nav.posts")}</Link> |
      <Link to="/users">{t("nav.users")}</Link>
    </nav>
  );
};

export default Navbar;
