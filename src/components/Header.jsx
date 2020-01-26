import React from "react";
import { Link, HashRouter } from "react-router-dom";

function Header() {
  return (
    <nav>
      <HashRouter basename="/">
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <a href="./files/Mark Koenig Resume.pdf" download>
              Download Resume
            </a>
          </li>
        </ul>
      </HashRouter>
    </nav>
  );
}

export default Header;
