import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <h1 className="home__title">
        So, you want to travel to
        <span className="home__highlight">SPACE</span>
      </h1>
      <p className="home__description">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
      <Link to="/destination" className="home__explorer">
        Explore
      </Link>
    </section>
  );
};

export default Home;
