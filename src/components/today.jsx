import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import fullDate from "./date";
import "./today.css";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import { storage } from "../firebase";

export default function Today() {
  const [images, setImages] = useState([]);
  const fileRef = ref(storage, "/copies/" + fullDate + "/");
  useEffect(() => {
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
  }, []);
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
      <Carousel>{images.map(createSlide)}</Carousel>
    </div>
  );
}
