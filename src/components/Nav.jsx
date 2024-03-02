import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {

  // Const active link
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();
  // End const active link

  // Updates items active refresh loading location
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);
  // End updates items active refresh loading location

  return (

    // Bloc nav
    <nav className="navbar navbar-expand-lg navbar-dark nav-bg-color">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <p class="header-text">John Doe</p>
        </Link>
        
        {/* Button menu mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* End button menu mobile */}

        {/* Menu of navigation */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className={`nav-item ${activeLink === "/" ? "active" : ""}`}>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li
              className={`nav-item ${
                activeLink === "/service" ? "active" : ""
              }`}
            >
              <Link to="/service" className="nav-link">
                Services
              </Link>
            </li>
            <li
              className={`nav-item ${
                activeLink === "/project" ? "active" : ""
              }`}
            >
              <Link to="/project" className="nav-link">
                Projects
              </Link>
            </li>
            <li
              className={`nav-item ${activeLink === "/blog" ? "active" : ""}`}
            >
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li
              className={`nav-item ${
                activeLink === "/contact" ? "active" : ""
              }`}
            >
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* End menu navigation */}
        
      </div>
    </nav>
    // End bloc nav

  );
}

export default Nav;
