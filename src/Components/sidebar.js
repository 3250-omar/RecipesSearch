import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
export const Sidebar = ({ To, close }) => {
  const Location =useLocation()
  console.log(Location.pathname , To.path)
  return (
    <div className="popup-sidebar" onClick={close}>
      {To.map((link) => {
        return (
          <>
            <Link
              to={link.path}
              key={link.name}
              className={Location.pathname === link.path ? "popup-sidebar-links active": 'popup-sidebar-links'}
            >
              <FontAwesomeIcon icon={link.icon} />
              {link.name}
            </Link>
          </>
        );
      })}
    </div>
  );
};
