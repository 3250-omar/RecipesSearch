import React from "react";
import { HeroSection } from "../Components/HeroSection";
import { ImproveSkill } from "../Components/ImproveSkill";
import { Qoute } from "../Components/Qoute";
import { ChefSection } from "../Components/ChefSection";
export const Home = () => {
  return (
    <div>
      <HeroSection />
      <ImproveSkill />
      <Qoute />
      <ChefSection />
    </div>
  );
};
