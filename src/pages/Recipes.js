import React from "react";
import { RecipesHeading } from "../Components/Recipes-Heading";
import { Images } from "../Components/images";
import { RecipesCard } from "../Components/Recipes-card";
export const Recipes = () => {
  return (
    <div className="page-margin-top">
      <RecipesHeading />
      <div className="recipes-container">
        {Images.map((image) => {
          return <RecipesCard data={image} />
            ;
        })}
      </div>
    </div>
  );
};
