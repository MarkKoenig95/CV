import React from "react";

function Header() {
  return (
    <nav>
      <ul className="menu">
        <li>
          <a href="/">Resume</a>
        </li>
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
