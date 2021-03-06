import React, { useState } from "react";
import { generateQR } from "./api";
import "antd/dist/antd.css";
import "./styles.css";

import DataInput from "./components/DataInput";
import Result from "./components/Result";

export default function App() {
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const fetchQR = async ({ data }) => {
    setIsLoading(true);
    const response = await generateQR(data);
    response.onload = function () {
      var imageDataUrl = response.result;
      // $("#selected-image").attr("src", imageDataUrl)
      // console.log(imageDataUrl);
      setImage(imageDataUrl);
      setIsLoading(false);
    };
  };
  return (
    <div className="App">
      <DataInput handleSubmit={fetchQR} state={isLoading} />
      <Result data={image} state={isLoading} />
    </div>
  );
}
