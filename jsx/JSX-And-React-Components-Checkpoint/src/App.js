import React from "react";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import { productData } from "./product";

const firstName = "Dairo"; 

const App = () => {
  return (
    <div className="container">
      <h1>Hello, {firstName ? firstName : "there"}!</h1>
      {firstName && <Image image={productData.image} />}
      <div className="card">
        <div className="card-body">
          <Name name={productData.name} />
          <Price price={productData.price} />
          <Description description={productData.description} />
        </div>
      </div>
    </div>
  );
};

export default App;
