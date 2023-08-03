import React from 'react'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const RecipesHeading = () => {
    const searchfromprevious =()=>{
        console.log('omar')
      }
      const searches = [
        "pizza",
        "burger",
        "cookies",
        "juice",
        "rice",
        "orange",
        "lemon",
        "soup",
        'spacetti',
        'pashamel',
        'mahshi'
      ];
  return (
    <div><div className="previous-searches ">
    <h2>Previous Searches</h2>
    <div className="previous-searches-container">
      {searches.map((search, index) => {
        return (
          <div
            key={index}
            style={{ animationDelay: index * 0.1 + "s" }}
            className="searchitem"
            onClick={searchfromprevious}
          >
            {search}
          </div>
        );
      })}
    </div>
    <div className="search-box">
      <input type="search" placeholder="Search..." />
      <button className="btn">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  </div></div>
  )
}
