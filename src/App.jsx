import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import BackgroundImage from "./components/BackgroundImage";
import MouseFollower from "./components/MouseFollower";
import ImagePreloader from "./components/ImagePreloader";

function App() {
  return (
    <Router>
      <Nav />
      <BackgroundImage />
      <ImagePreloader />
      <MouseFollower />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </Router>
  );
}

export default App;
