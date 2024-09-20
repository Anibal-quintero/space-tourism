import { useEffect, useState } from "react";
import "./Destination.css";
import data from "../data/data.json";

const Destination = () => {
  const [destinationItem, setDestinationItem] = useState({});
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (data?.destinations.length > 0) {
      setDestinationItem(data?.destinations[0]);
      changeContent();
    }
  }, []);

  const updateDestination = (destination) => {
    setDestinationItem(destination);
    changeContent();
  };

  const changeContent = () => {
    setFade(false);
    setTimeout(() => {
      setFade(true);
    }, 100);
  };

  return (
    <div className="destination">
      <div className="destination__container">
        <h2 className="destination__heading">
          <span className="destination__heading-number">01</span> Pick your
          destination
        </h2>
        <div className="destination__content">
          <div className="destination__image-container">
            <img
              className={`destinatio__image ${fade ? "fade-in" : "fade-out"}`}
              src={destinationItem?.images?.webp}
              alt="Moon"
            />
          </div>
          <div className="destination__details">
            <nav className="destination__nav">
              <ul className="destination__list">
                {data?.destinations.map((destination) => (
                  <li className="destination__list-item" key={destination.name}>
                    <button
                      className="destination__button"
                      onClick={() => updateDestination(destination)}
                    >
                      {destination.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <h2
              className={`destination__title ${fade ? "fade-in" : "fade-out"}`}
            >
              {destinationItem.name}
            </h2>
            <p
              className={`destination__description ${
                fade ? "fade-in" : "fade-out"
              }`}
            >
              {destinationItem.description}
            </p>
            <hr
              className={`destination__divider ${
                fade ? "fade-in" : "fade-out"
              }`}
            />
            <div
              className={`destination__info ${fade ? "fade-in" : "fade-out"}`}
            >
              <p className="destination__distance">
                avg. distance
                <span className="destination__distance-value">
                  {destinationItem.distance}
                </span>
              </p>
              <p className="destination__travel">
                Est. Travel time
                <span className="destination__travel-value">
                  {destinationItem.travel}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
