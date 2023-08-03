import React from "react";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const ChefCard = (props) => {
  const { name, img, recipesCount, cuisine } = props.data;
  return (
    <div className="chefCard">
      <img src={img} alt="" />
      <div className="info">
        <p className="chefname">{name}</p>
        <p>
          Recipes:<span className="amount-culsines">{recipesCount}</span>
        </p>
        <p>
          Cuisine:<span className="amount-culsines">{cuisine}</span>
        </p>
        <div className="social-media">
          <a href="#!">
            <FontAwesomeIcon icon={faFacebook} style={{ color: "blue" }} />
          </a>
          <a href="#!">
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ color: "rgb(53, 183, 230)" }}
            />
          </a>
          <a href="#!">
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "rgb(243, 177, 204)" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
