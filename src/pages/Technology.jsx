import "./Technology.css";
import data from "../data/data";
import useUpdateContent from "../hooks/useUpdateContent";

const Technology = () => {
  let initialItem;

  if (data?.technology.length > 0) {
    initialItem = data?.technology[0];
  }
  const { currentItem, activeTab, fade, updateContent } =
    useUpdateContent(initialItem);

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
                      className={`technology__button ${
                        activeTab === technology.name ? "selectedBg" : ""
                      }`}
                      onClick={() => updateContent(technology, technology.name)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <div
              className={`technology__details ${fade ? "fade-in" : "fade-out"}`}
            >
              <h2 className="technology__title">The terminology...</h2>
              <h3 className="technology__subtitle">{currentItem.name}</h3>
              <p className="technology__description">
                {currentItem.description}
              </p>
            </div>
          </div>
          <div className="technology__image-container">
            <img
              className={`technology__image ${fade ? "fade-in" : "fade-out"}`}
              src={currentItem.images?.portrait}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
