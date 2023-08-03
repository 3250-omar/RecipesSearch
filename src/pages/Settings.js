import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export const Settings = () => {
  const [settings, setSettings] = useState({
    "--background-color": "#fff",
    "--background-light": "#fff",
    "--shadow-color": "rgba(0,0,0,0.2)",
    "--primary-color": "rgb(255, 0, 86)",
    "--text-color": "#0A0A0A",
    "--text-light": "#575757",
    "--font-size": "16px",
    "--animation-speed": 1,
  });
  useEffect(() => {
    const root = document.documentElement;
    for (let key in settings) {
      root.style.setProperty(key, settings[key]);
    }
  }, [settings]);
  /* Primary Colors Reference */
  const PrimaryColors = [
    "rgb(255,0,86)",
    "rgb(33,150,243)",
    "rgb(255,193,7)",
    "rgb(0,200,83)",
    "rgb(156,39,176)",
  ];

    /* Font Details Reference */
  const FontSize = [
    {
      title: "Small",
      value: "12px",
    },
    {
      title: "Medium",
      value: "16px",
    },
    {
      title: "Large",
      value: "20px",
    },
  ];

    /* Speed Reference */
  const Speed = [
    {
      title: "Slow",
      speed: "2",
    },
    { title: "Medium", speed: "1" },
    { title: "Fast", speed: ".5" },
  ];
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [theme, setTheme] = useState("light");

    /* Themes Reference */
  const themes = [
    {
      "--background-color": "#fff",
      "--background-light": "#fff",
      "--shadow-color": "rgba(0,0,0,0.2)",
      "--text-color": "#0A0A0A",
      "--text-light": "#575757",
    },
    {
      "--background-color": "rgb(29, 29, 29)",
      "--background-light": "rgb(77, 77, 77)",
      "--shadow-color": "rgba(255,255,255,0.1)",
      "--text-color": "#ffffff",
      "--text-light": "#eceaea",
    },
  ];
  const [primaryColor, setPrimaryColor] = useState(0);
  const [font, setFont] = useState(1);

/*Changing Primary Color Function */
  const ChangePrimary = (i) => {
    const _color = PrimaryColors[i];
    let _settings = { ...Settings };
    _settings["--primary-color"] = _color;
    setPrimaryColor(i);
    setSettings(_settings);
  };

  /*Changing Font Size Function */
  const ChangeFont = (i) => {
    const _font = FontSize[i];
    let _setting = { ...Settings };
    _setting["--font-size"] = _font.value;
    setFont(i);
    setSettings(_setting);
  };

  /*Changing Theme Function */
  const ChangeTheme = (i) => {
    const _theme = { ...themes[i] };
    setTheme(i === 0 ? "light" : "dark");
    //update Setting
    let _Setting = { ...settings };
    for (let key in _theme) {
      _Setting[key] = _theme[key];
    }
    setSettings(_Setting);
  };

  /*Changing Speed Function */
  const ChangeSpeed = (i) => {
    let _speed = Speed[i];
    console.log(_speed.value);
    let _settings = { ...Settings };
    _settings["--animation-speed"] = _speed.speed;
    setAnimationSpeed(i);
    setSettings(_settings);
  };
  return (
    <div className="center">
      <div className="options-container">
        <h1>Preferred theme</h1>
        <div className="options">
          <div className="option-item light" onClick={() => ChangeTheme(0)}>
            {theme === "light" && (
              <div className="check ">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
          <div className="option-item dark" onClick={() => ChangeTheme(1)}>
            {theme === "dark" && (
              <div className="check ">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
        </div>
        <h1>Primary Color</h1>
        <div className="options">
          {PrimaryColors.map((primary, index) => {
            return (
              <>
                <div
                  className="option-item"
                  style={{ backgroundColor: primary }}
                  key={index}
                  onClick={() => ChangePrimary(index)}
                >
                  {primaryColor === index && (
                    <div className="check ">
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                  )}
                </div>
              </>
            );
          })}
        </div>
        <h1>Font size</h1>
        <div className="options">
          {FontSize.map((size, index) => {
            return (
              <>
                <div className="btn" onClick={() => ChangeFont(index)}>
                  {size.title}{" "}
                  {font === index && (
                    <div className="check ">
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                  )}
                </div>
              </>
            );
          })}
        </div>
        <h1>Animation speed</h1>
        <div className="options">
          {Speed.map((animation, index) => {
            return (
              <>
                <div className="btn" onClick={() => ChangeSpeed(index)}>
                  {animation.title}{" "}
                  {animationSpeed === index && (
                    <div className="check ">
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
