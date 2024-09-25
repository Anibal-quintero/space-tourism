import { useEffect } from "react";
import { useState } from "react";
import "./MouseFollower.css";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const style = {
    top: `${position.y}px`,
    left: `${position.x}px`,
  };

  return <div className="mouse" style={style} />;
};

export default MouseFollower;
