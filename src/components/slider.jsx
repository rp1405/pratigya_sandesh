import { useNavigate } from "react-router-dom";
import "./slider.css";
import fullDate from "./date";
const sliderbuttons = [
  { name: "Home", route: "/" },
  { name: "About Us", route: "/about" },
  { name: "Today's Newspaper", route: "/date/" + fullDate },
  { name: "Admin", route: "/admin" },
];
export default function Slider() {
  const navigate = useNavigate();
  function createSlider(obj, ind) {
    return (
      <div
        className="tags"
        key={ind}
        onClick={() => {
          navigate(obj.route);
        }}
      >
        {obj.name}
      </div>
    );
  }
  return <div className="scrollmenu">{sliderbuttons.map(createSlider)}</div>;
}
