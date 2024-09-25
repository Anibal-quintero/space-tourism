import { Link, useLocation } from "react-router-dom";
import image from "../assets/shared/logo.svg";
import open from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import "./Nav.css";
import { useState } from "react";

const Nav = () => {
  const location = useLocation();
  const [isMoved, setIsMoved] = useState(false);

  const openMenu = () => {
    setIsMoved(!isMoved);
  };

  return (
    <header className="nav-header">
      <div className="nav-logo">
        <img src={image} alt="Logo" />
      </div>
      <nav className={`nav-menu ${isMoved ? "open" : ""}`}>
        <ul className="nav-list">
          <li
            className={`nav-item ${
              location.pathname === "/" ? "selected" : ""
            }`}
          >
            <Link to="/" className="nav-link">
              <span>00</span> HOME
            </Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/destination" ? "selected" : ""
            }`}
          >
            <Link to="/destination" className="nav-link">
              <span>01</span> DESTINATION
            </Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/crew" ? "selected" : ""
            }`}
          >
            <Link to="/crew" className="nav-link">
              <span>02</span> CREW
            </Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/technology" ? "selected" : ""
            }`}
          >
            <Link to="/technology" className="nav-link">
              <span>03</span> TECHNOLOGY
            </Link>
          </li>
        </ul>
      </nav>
      <button className="nav-button" onClick={openMenu}>
        {isMoved ? <img src={close} alt="" /> : <img src={open} alt="Menu" />}
      </button>
    </header>
  );
};

export default Nav;
