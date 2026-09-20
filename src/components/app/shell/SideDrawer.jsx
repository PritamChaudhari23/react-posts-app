import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../page.scss";

const SideDrawer = () => {
  const { t } = useTranslation();

  return (
    <aside id="app-sidebar" className="app-sidebar">
      <Link to="/posts">{t("nav.posts")}</Link>
      <Link to="/users">{t("nav.users")}</Link>
    </aside>
  );
};

export default SideDrawer;
