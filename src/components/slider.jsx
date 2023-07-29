import { useNavigate } from "react-router-dom";
import "./slider.css";
const now = new Date();
var date = now.getDate() + "";
if (date.length < 2) date = "0" + date;
var month = now.getMonth() + "";
if (month.length < 2) month = "0" + month;
const fullDate = date + month + now.getFullYear();
console.log(fullDate);
const sliderbuttons = [
  { name: "Home", route: "/" },
  { name: "About Us", route: "/about" },
  { name: "Today's Newspaper", route: "/date/" + fullDate },
];
export default function Slider() {
  const navigate = useNavigate();
  const now = new Date();
  var date = now.getDate() + "";
  if (date.length < 2) date = "0" + date;
  var month = now.getMonth() + "";
  if (month.length < 2) month = "0" + month;
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
