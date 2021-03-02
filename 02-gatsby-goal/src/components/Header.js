import { Link } from "gatsby";
import React from "react";
import { container, siteName, nav, navItem, social } from "./Header.module.css";

const Header = () => {
  return (
    <header className={container}>
      <h1 className={siteName}>
        <Link to="/">My Site</Link>
      </h1>
      <ul className={nav}>
        <li className={navItem}>
          <Link to="/about">About</Link>
        </li>
        <li className={navItem}>
          <a href="/">Works</a>
        </li>
      </ul>
      <div className={social}>
        <a href="https://github.com/mottox2" target="_blank" rel="noreferrer">
          <img width={32} height={32} alt="GitHub" src="/GitHub.png" />
        </a>
      </div>
    </header>
  );
};

export default Header;
