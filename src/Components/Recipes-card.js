import React from "react";
import chef from '../Assets/img/TopChefs/img_2.jpg'
export const RecipesCard = ({data}) => {

  return (
    <div className="recipe-card">
        <img src={data.img} alt=""/>
        <div className="recipe-card-info">
            <img src={chef} alt=""/>
            <p className="Chef-name">omar mostafa</p>
            <p className="recipe-desc">omajkskl;ldxl;AMKMdklmdnnniillllllllllllllllllsjsnsnsnsnsiiisksklkskl lsm</p>
            <a className="view-recipe" href="#!">view recipe</a>
        </div>
    </div>
  );
};
