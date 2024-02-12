import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BackgroundVideo from "../Navbar/BackgroundVideo.js";
import "./Navbar.css";

const Navbar = () => {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    var navbar = document.getElementById("navbar");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      navbar.style.backgroundColor = "black";
      navbar.style.height = "fit-content"; 
    } else {
      navbar.style.backgroundColor = "transparent"; // Change to the original color
    }
  }
  const [isMobile, setIsMobile] = useState(false);
  console.log("isMobiile", isMobile);
  return (
    <nav>
      <BackgroundVideo />
      <div className="nav--container" id="navbar">
        <h1>Proptimize</h1>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
          <li>
            <NavLink className="link border" to="/">
              Homepage
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={(e) => setIsMobile(!isMobile)}
              className="link border"
              to="/discover"
            >
              Discover
            </NavLink>
          </li>
          <li>
            <NavLink className="link border" to="/usecase">
              Use Case
            </NavLink>
          </li>
          <li>
            <NavLink className="link border" to="/faqs">
              FAQs
            </NavLink>
          </li>
        </ul>
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="nav--content">
        <h2>home. the place where you leap, learn and live</h2>
      </div>
    </nav>
  );
};

export default Navbar;
