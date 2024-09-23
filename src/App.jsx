import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navar from "./components/Navar";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import BackgroundImage from "./components/BackgroundImage";

function App() {
  return (
    <BrowserRouter>
      <Navar />
      <BackgroundImage />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
