import axios from "axios";
export function Base64Converter(file) {
  async function convert(file) {
    if (file) {
      try {
        const base64String = await convertFileToBase64(file);
        return base64String;
      } catch (error) {
        console.error("Error reading file:", error);
      }
    }
  }
  function convertFileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  }
  const base64String = convert(file);
  return base64String;
}
export async function pdfToPng(base64String, name) {
  const folder = await axios.post(
    `https://v2.convertapi.com/convert/pdf/to/png?Secret=W2DcdVvBFkWbjAbB`,
    {
      Parameters: [
        {
          Name: "File",
          FileValue: {
            Name: name,
            Data: base64String,
          },
        },
        {
          Name: "StoreFile",
          Value: true,
        },
      ],
    }
  );
  return folder;
}
