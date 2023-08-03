import React from "react";

export const CustomImage = ({ Imgsrc, pt }) => {
  return (
    <div className="customimages" style={{ paddingTop: pt }}>
        <img src={Imgsrc.img} alt=""/>
    </div>
  );
};
