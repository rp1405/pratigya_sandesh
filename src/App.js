import Header from "./components/header";
import Slider from "./components/slider";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Today from "./components/today";
import Admin from "./components/admin";
function App() {
  return (
    <div style={{ margin: "0px" }}>
      <Header />
      <Slider />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/date">
          <Route path=":id" element={<Today />} />
        </Route>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}
export default App;
