import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import fullDate from "./date";
import "./today.css";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import { storage } from "../firebase";
const fileRef = ref(storage, "/copies/" + fullDate + "/");
export default function Today() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    listAll(fileRef).then((items) => {
      // console.log(items);
      items.items.forEach((itemRef) => {
        getDownloadURL(itemRef).then((url) => {
          setImages((prev) => [...prev, url]);
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
  console.log(images);
  return (
    <div className="newspaper">
      <Carousel>{images.map(createSlide)}</Carousel>
    </div>
  );
}
