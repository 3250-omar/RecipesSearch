import React from "react";

export const Footer = () => {
  const date = new Date();
  return (
    <div className="footer">
      <div className="about">
        <p className="title">FoodiesHub.com</p>
        <p>
          FoodiesHub is a place where you can please your soul and tummy with
          delicious food recepies of all cuisine. And our service is absolutely
          free.
        </p>
        <p>&copy; {date.getFullYear()} | All Rights Reserved</p>
      </div>
      <div className="contact">
        <p className="title">Contact Us</p>
        <p>foodieshub@gmail.com</p>
        <p>+342-5324-9454</p>
        <p>2393 Street NYC</p>
      </div>
      <div className="social">
        <p className="title">Socials</p>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </div>
    </div>
  );
};
