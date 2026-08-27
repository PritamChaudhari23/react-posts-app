import Navbar from "./Navbar";
import "../appPage.scss";

const Header = () => {
  return (
    <header id="app-header" className="app-header">
      <h3 style={{ margin: 0, fontSize: "18px" }}>Header</h3>
      <Navbar />
    </header>
  );
};

export default Header;
