import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <section>
      <h1>
        So, you want to travel to
        <span>SPACE</span>
      </h1>
      <p>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
      <Link to={"/destination"} className="explorer">
        Explore
      </Link>
    </section>
  );
};

export default Home;
