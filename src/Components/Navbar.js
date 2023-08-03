import React from "react";
import { useState } from "react";
import { Sidebar } from "./sidebar";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
export const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const Location = useLocation();
  const Links = [
    {
      name: "Home",
      path: "/",
      icon: faHome,
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: faCog,
    },
  ];
  const CloseSideBar = () => {
    setShowSideBar(false);
  };
  return (
    <>
      <div className="navbar container">
      <Link to='/' className="logo">F<span>oo</span>diesHub</Link>

        <div className="nav-links">
          {Links.map((each) => {
            return (
              <Link
                to={each.path}
                key={each.name}
                className={Location.pathname === each.path && "active"}
              >
                {each.name}
              </Link>
            );
          })}
        </div>
        <div
          onClick={() => setShowSideBar(!showSideBar)}
          className={showSideBar ? "side-bar active" : "side-bar"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSideBar && <Sidebar To={Links} close={CloseSideBar} />}
    </>
  );
};
