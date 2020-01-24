import React from "react";

function Header() {
  return (
    <nav>
      <ul className="menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/">Download Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
