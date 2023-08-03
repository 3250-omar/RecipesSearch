import React from "react";
import { CustomImage } from "./CustomImage";
import { Images } from "./images";
export const HeroSection = () => {
  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="title">What Are We About</h1>
        <p>
          FoodiesHub is a place where you can please your soul and tummy with
          delecious food reciepes of all culsine And our service is absolutely
          free. So start exploring now.
        </p>
        <button className="btn">explore now</button>
      </div>
      <div className="col galary">
        {Images.map((image, index) => {
          return <CustomImage Imgsrc={image} pt={"90%"} key={index} />;
        })}
      </div>
    </div>
  );
};
