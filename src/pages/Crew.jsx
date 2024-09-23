import "./Crew.css";
import data from "../data/data.json";
import useUpdateContent from "../hooks/useUpdateContent";

const Crew = () => {

  let initialItem;

  if (data?.crew.length > 0) {
    initialItem = data?.crew[0];
  }
  const { currentItem, activeTab, fade, updateContent } = useUpdateContent(initialItem);

  return (
    <div className="crew">
      <div className="crew__container">
        <h2 className="crew__heading">
          <span className="crew__heading__number">02</span> Meet your crew
        </h2>
        <div className="crew__content">
          <div className="crew__details">
            <h2 className={`crew__role ${fade ? "fade-in" : "fade-out"}`}>
              {currentItem.role}
            </h2>
            <h3 className={`crew__name ${fade ? "fade-in" : "fade-out"}`}>
              {currentItem.name}
            </h3>
            <p className={`crew__bio ${fade ? "fade-in" : "fade-out"}`}>
              {currentItem.bio}
            </p>
            <ul className="crew__list">
              {data?.crew.map((crew) => (
                <li key={crew.name} className="crew__list-item">
                  <button
                    className={`crew__button ${
                      crew.name === activeTab ? "selectedBg" : ""
                    }`}
                    onClick={() => updateContent(crew, crew.name)}
                  ></button>
                </li>
              ))}
            </ul>
          </div>
          <div className="crew__image-container">
            <img
              className={`crew__image ${fade ? "fade-in" : "fade-out"}`}
              src={currentItem.images?.webp}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
