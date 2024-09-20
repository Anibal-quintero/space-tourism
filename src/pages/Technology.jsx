import "./Technology.css";
import data from "../data/data.json";
import { useEffect, useState } from "react";

const Technology = () => {
  const [infoTechnology, setInfoTechnology] = useState({});
  const [fade, setFade] = useState(false);

  const changeTechnology = (technology) => {
    setInfoTechnology(technology);
    changeContent();
  };

  useEffect(() => {
    if (data?.technology.length > 0) {
      setInfoTechnology(data.technology[0]);
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
    <div className="technology">
      <div className="technology__container">
        <h2 className="technology__heading">
          <span className="technology__heading-number">03</span> SPACE LAUNCH
          101
        </h2>
        <div className="technology__content">
          <div className="technology__nav-container">
            <nav className="technology__nav">
              <ul className="technology__list">
                {data?.technology.map((technology, index) => (
                  <li key={index} className="technology__list-item">
                    <button
                      className="technology__button"
                      onClick={() => changeTechnology(technology)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div
            className={`technology__details ${fade ? "fade-in" : "fade-out"}`}
          >
            <h2 className="technology__title">The terminology...</h2>
            <h3 className="technology__subtitle">{infoTechnology.name}</h3>
            <p className="technology__description">
              {infoTechnology.description}
            </p>
          </div>
          <div className="technology__image-container">
            <img
              className={`technology__image ${fade ? "fade-in" : "fade-out"}`}
              src={infoTechnology.images?.portrait}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
