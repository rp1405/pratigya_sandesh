import React, { useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes } from "firebase/storage";
import fullDate, { makeDate, makeDate2 } from "./date";
import Loading from "./loading";
import { Base64Converter, pdfToPng } from "../converter";
import DatePicker from "./DatePicker";
const fileInputStyles = {
  fileInputContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: "20px",
    marginBottom: "10px",
    color: "white",
  },
  fileLabel: {
    border: "2px solid #ddd",
    borderRadius: "15px",
    padding: "10px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 1s",
    backgroundColor: "black",
    width: "50vw",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
  },
  fileLabelHover: {
    backgroundColor: "black",
  },
  inputFile: {
    display: "none",
  },
  button: {
    backgroundColor: "black",
    color: "white",
    borderRadius: "10px",
    border: "2px solid #ddd",
    width: "25vw",
    padding: "10px",
    fontSize: "16px",
    transition: "background-color 1s",
  },
  dateAndUpload: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default function Datapusher() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(0);
  const [paramDate, setParamDate] = useState(makeDate2(new Date()));
  const folder = "/copies/" + paramDate + "/";
  console.log(folder);
  const uploadFile = async () => {
    if (selectedFile == null) {
      alert("Please select a file");
      return;
    } else {
      setIsLoading(1);
      try {
        const base64String = await Base64Converter(selectedFile);
        const images = await pdfToPng(base64String, selectedFile.name);
        console.log(images.data.Files);
        const imageData = images.data.Files;
        await imageData.map(async (obj, ind) => {
          const url = obj.Url;
          await fetch(url)
            .then((res) => {
              return res.blob();
            })
            .then((blob) => {
              console.log(blob);
              const fileRef = ref(storage, folder + ind);
              uploadBytes(fileRef, blob);
            })
            .catch((error) => {
              console.log(error);
            });
        });
        setIsLoading(0);
        alert("Successfully uploaded");
      } catch (error) {
        console.log(error);
      }
      setSelectedFile(null);
    }
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <div style={fileInputStyles.fileInputContainer}>
        <input
          type="file"
          id="file-input"
          onChange={handleFileChange}
          style={fileInputStyles.inputFile}
        />
        <label
          htmlFor="file-input"
          className="file-label"
          style={{
            ...fileInputStyles.fileLabel,
            ...(selectedFile ? fileInputStyles.fileLabelHover : null),
          }}
        >
          {selectedFile ? selectedFile.name : "Choose a file"}
        </label>
      </div>
      <div style={fileInputStyles.dateAndUpload}>
        <DatePicker setParamDate={setParamDate} />
        <button style={fileInputStyles.button} onClick={uploadFile}>
          Upload
        </button>
      </div>
    </div>
  );
}
