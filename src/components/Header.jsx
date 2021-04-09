import React from "react";
import { Link, HashRouter } from "react-router-dom";

function Header() {
  return (
    <nav>
      <HashRouter basename="/">
        <div className="nav-menu">
          <div className="nav-buttons">
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
          </div>
          <a href="./files/Mark Koenig Resume.pdf" download>
            Download Resume
          </a>
        </div>
      </HashRouter>
    </nav>
  );
}

export default Header;
