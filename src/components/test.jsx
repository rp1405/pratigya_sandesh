import React, { useState } from "react";

import { Base64Converter, pdfToPng } from "../converter";
export default function Test() {
  const [file, setFile] = useState(null);
  const handleClick = async (file) => {
    const base64Data = await Base64Converter(file);
    const images = await pdfToPng(base64Data, file.name);
    // console.log(base64Data);
    console.log(images.data.Files);
    //const folder = pdfToPng(base64Data);
    //console.log(folder);
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
    console.log(file);
  };
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={() => handleClick(file)}></button>
    </div>
  );
}
