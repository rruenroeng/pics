import "./ImageList.css";
import ImageCard from "./ImageCard";
import React from "react";


const ImageList = ({ images }) => {
  console.log({ images });
  const ImagesDisplay = images.map((image) => {
    return <ImageCard key={image.id} image={image}/>;
  });

  return <div className="image-list">{ImagesDisplay}</div>;
};

export default ImageList;
