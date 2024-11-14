import { useState } from "react";
import Lists from "./Lists";
import Logo from "./Logo";
import "./NavBar.scss";
import ToggleNavbar from "./ToggleNavbar";

const NavBar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleMenu = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <header className={`${toggleNav ? "nav-opened" : ""}`}>
      <nav className="nav">
        <Logo />
        <Lists navState={toggleNav} />
      </nav>
      <ToggleNavbar navState={toggleNav} onClick={handleToggleMenu} />
    </header>
  );
};

export default NavBar;
