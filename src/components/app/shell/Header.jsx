import Navbar from "./Navbar";
import LanguageSwitcher from "./LanguageSwitcher";
import "../page.scss";

const Header = () => {
  return (
    <header id="app-header" className="app-header">
      <h3 style={{ margin: 0, fontSize: "18px" }}>Header</h3>
      <Navbar />
      <LanguageSwitcher />
    </header>
  );
};

export default Header;
