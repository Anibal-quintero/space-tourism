import { Link, useLocation } from "react-router-dom";
import "./Navar.css";

const Navar = () => {

  const location = useLocation();

  return (
    <header>
      <div>
        <img src="/assets/shared/logo.svg" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li className={`${location.pathname === "/" ? "selected" : ""}`}>
            <Link to="/">
              <span>00</span> HOME
            </Link>
          </li>
          <li className={`${location.pathname === "/destination" ? "selected" : ""}`}>
            <Link to="/destination">
              <span>01</span> DESTINATION
            </Link>
          </li>
          <li className={`${location.pathname === "/crew" ? "selected" : ""}`}>
            <Link to="/crew">
              <span>02</span> CREW
            </Link>
          </li>
          <li className={`${location.pathname === "/technology" ? "selected" : ""}`}>
            <Link to="/technology">
              <span>03</span> TECHNOLOGY
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navar;
