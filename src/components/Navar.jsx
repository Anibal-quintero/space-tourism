import { Link } from "react-router-dom";
import "./Navar.css";
import { useState } from "react";

const Navar = () => {
  
  const [activeTab, setActiveTab] = useState("/home");

  const sendUrlAndPath = (patch, imageUrl) => {
    document.body.style.backgroundImage = `url(${imageUrl})`;
    setActiveTab(patch);
  };

  return (
    <header>
      <div>
        <img src="/assets/shared/logo.svg" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li className={`${activeTab === "/home" ? "selected" : ""}`}>
            <Link
              to="/"
              onClick={() =>
                sendUrlAndPath(
                  "/home",
                  "/assets/home/background-home-desktop.jpg"
                )
              }
            >
              <span>00</span> HOME
            </Link>
          </li>
          <li className={`${activeTab === "/destination" ? "selected" : ""}`}>
            <Link
              to="/destination"
              onClick={() =>
                sendUrlAndPath(
                  "/destination",
                  "/assets/destination/background-destination-desktop.jpg"
                )
              }
            >
              <span>01</span> DESTINATION
            </Link>
          </li>
          <li className={`${activeTab === "/crew" ? "selected" : ""}`}>
            <Link
              to="/crew"
              onClick={() =>
                sendUrlAndPath(
                  "/crew",
                  "/assets/crew/background-crew-desktop.jpg"
                )
              }
            >
              <span>02</span> CREW
            </Link>
          </li>
          <li className={`${activeTab === "/Technology" ? "selected" : ""}`}>
            <Link
              to="/Technology"
              onClick={() =>
                sendUrlAndPath(
                  "/Technology",
                  "/assets/technology/background-technology-desktop.jpg"
                )
              }
            >
              <span>03</span> TECHNOLOGY
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navar;
