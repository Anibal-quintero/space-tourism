import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./BackgroundImage.css";

const BackgroundImage = () => {

  const location = useLocation();

  useEffect(() => {
    const bodyClassMap = {
      "/": "background-home",
      "/destination": "background-destination",
      "/crew": "background-crew",
      "/technology": "background-technology",
    };

    document.body.className = "";

    const newClass = bodyClassMap[location.pathname] || "";
    document.body.classList.add(newClass);

    return () => {
      document.body.className = "";
    };
    
  }, [location]);

  return null;
};

export default BackgroundImage;
