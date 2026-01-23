import { FC } from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header: FC = () => {
  return (
    <header id="app-header" className="app-header">
      <h1>Header</h1>
      <Navbar />
    </header>
  );
};

export default Header;
