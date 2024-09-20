import "./Crew.css";
import data from "../data/data.json";
import { useState } from "react";
import { useEffect } from "react";

const Crew = () => {
  const [infoCrew, setInfoCrew] = useState({});
  const [fade, setFade] = useState(false);

  const changeCrew = (crew) => {
    setInfoCrew(crew);
    changeContent();
  };

  useEffect(() => {
    if (data?.crew.length > 0) {
      setInfoCrew(data?.crew[0]);
      changeContent();
    }
  }, []);

  const changeContent = () => {
    setFade(false);
    setTimeout(() => {
      setFade(true);
    }, 100);
  };

  return (
    <div className="crew">
      <div className="crew__container">
        <h2 className="crew__heading">
          <span className="crew__heading__number">02</span> Meet your crew
        </h2>
        <div className="crew__content">
          <div className="crew__details">
            <h2 className={`crew__role ${fade ? "fade-in" : "fade-out"}`}>
              {infoCrew.role}
            </h2>
            <h3 className={`crew__name ${fade ? "fade-in" : "fade-out"}`}>
              {infoCrew.name}
            </h3>
            <p className={`crew__bio ${fade ? "fade-in" : "fade-out"}`}>
              {infoCrew.bio}
            </p>
            <ul className="crew__list">
              {data?.crew.map((crew) => (
                <li key={crew.name} className="crew__list-item">
                  <button
                    className="crew__button"
                    onClick={() => changeCrew(crew)}
                  ></button>
                </li>
              ))}
            </ul>
          </div>
          <div className="crew__image-container">
            <img
              className={`crew__image ${fade ? "fade-in" : "fade-out"}`}
              src={infoCrew.images?.webp}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
