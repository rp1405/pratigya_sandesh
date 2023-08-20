import React, { useState, useEffect } from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import lgRotate from "lightgallery/plugins/rotate";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgShare from "lightgallery/plugins/share";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";
import "lightgallery/css/lightgallery.css";
import "./today.css";
import fullDate from "./date";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import { storage } from "../firebase";
import DatePicker from "./DatePicker";
export default function Today() {
  const [images, setImages] = useState([]);
  // const images = [
  //   "https://images.unsplash.com/photo-1690149347325-13435f400dd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
  //   "https://images.unsplash.com/photo-1690149347325-13435f400dd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
  //   "https://images.unsplash.com/photo-1690149347325-13435f400dd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
  //   "https://images.unsplash.com/photo-1690149347325-13435f400dd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
  // ];
  const [paramDate, setParamDate] = useState(fullDate);
  const [totalPages, setTotalPages] = useState(4);
  const [showCalendar, setShowCalendar] = useState(false);
  const imageClass = {
    maxWidth: "100vw",
    position: "absolute",
    top: showCalendar ? "440px" : "150px",
  };
  useEffect(() => {
    setImages([]);
    setTotalPages(0);
    const fileRef = ref(storage, "/copies/" + paramDate + "/");
    const func = async () => {
      const items = await listAll(fileRef);
      setTotalPages(items.items.length);
      items.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        setImages((prev) => {
          const arr = [...prev, url];
          arr.sort();
          return arr;
        });
      });
    };
    func();
  }, [paramDate]);
  function createSlide(obj, i) {
    const ind = (i + totalPages + 1) % totalPages;
    // console.log(totalPages);
    return (
      <a href={images[ind]}>
        <img
          src={images[ind]}
          alt={"Page " + (ind + 1)}
          style={imageClass}
        ></img>
      </a>
    );
  }
  // console.log(images);
  return (
    <div className="newspaper">
      <div>
        <DatePicker
          setParamDate={setParamDate}
          showCalendar={showCalendar}
          setShowCalendar={setShowCalendar}
        />
      </div>
      <div>
        <LightGallery
          plugins={[lgZoom, lgVideo, lgThumbnail, lgShare, lgRotate]}
        >
          {images.map(createSlide)}
        </LightGallery>
      </div>
    </div>
  );
}
