import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./today.css";
const images = [
  "../../assets/test-1.png",
  "../../assets/test-2.png",
  "../../assets/test-3.png",
  "../../assets/test-4.png",
];
export default function Today() {
  function createSlide(obj, ind) {
    return (
      <div key={ind}>
        <img src={images[ind]}></img>
      </div>
    );
  }
  return (
    <div className="newspaper">
      <Carousel>{images.map(createSlide)}</Carousel>
    </div>
  );
}
