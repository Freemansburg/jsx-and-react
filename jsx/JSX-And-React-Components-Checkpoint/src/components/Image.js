// Image.js
import React from "react";

const Image = ({ image }) => {
  return <img src={image} alt="Product" style={{ maxWidth: "200px" }} />;
};

export default Image;
