import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import fullDate from "./date";
import "./today.css";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import { storage } from "../firebase";
import DatePicker from "./DatePicker";

export default function Today() {
  const [images, setImages] = useState([]);
  const [paramDate, setParamDate] = useState(fullDate);
  useEffect(() => {
    const fileRef = ref(storage, "/copies/" + paramDate + "/");
    console.log(paramDate);
    console.log("rerender");
    listAll(fileRef).then((items) => {
      items.items.forEach((itemRef) => {
        getDownloadURL(itemRef).then((url) => {
          setImages((prev) => {
            return [...prev, url];
          });
          console.log(images);
        });
      });
    });
  }, [paramDate]);
  function createSlide(obj, ind) {
    return (
      <div key={ind}>
        <img src={images[ind]}></img>
      </div>
    );
  }
  // console.log(images);
  return (
    <div className="newspaper">
      <DatePicker setParamDate={setParamDate} />
      <Carousel>{images.map(createSlide)}</Carousel>
    </div>
  );
}
