import React from "react";
import skillsection from "../Assets/img/img_10.jpg";
export const ImproveSkill = () => {
  const list = [
    "Learn new recipes",
    "Experiment with food",
    "Write your own recipes",
    "Know neutron facts",
    "Get cooking tips",
    "Get ranked",
  ];
  return (
    <div className="section improve-skill-section">
      <div className="col image">
        <img src={skillsection} alt="" />
      </div>
      <div className="col typography">
        <h1 className="title">Improve Your Culinary Skills</h1>
        {list.map((each, index) => {
          return (
            <p className="improve" key={index}>
              {each}
            </p>
          );
        })}
        <button className="btn">sign now</button>
      </div>
    </div>
  );
};
