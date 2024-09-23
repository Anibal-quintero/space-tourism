import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./BackgroundImage.css";

const BackgroundImage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.className = "background-home";
    } else if (location.pathname === "/destination") {
      document.body.className = "background-destination";
    } else if (location.pathname === "/crew") {
      document.body.className = "background-crew";
    } else if (location.pathname === "/technology") {
      document.body.className = "background-technology";
    }
  }, [location]);

  return null;
};

export default BackgroundImage;
