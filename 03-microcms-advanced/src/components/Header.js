import { Link } from "gatsby";
import React from "react";
import * as styles from "./Header.module.css";

const categories = [
  {
    slug: "dev",
    name: "開発",
  },
  {
    slug: "design",
    name: "デザイン",
  },
  {
    slug: "diary",
    name: "雑記",
  },
];

const Header = ({ siteTitle }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <ul className={styles.categories}>
          {categories.map((category) => {
            return (
              <li className={styles.category} key={category.slug}>
                <Link to={`/categories/${category.slug}`}>{category.name}</Link>
              </li>
            );
          })}
        </ul>
        <h1 className={styles.title}>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <div className={styles.social}>
          <a href="https://github.com/mottox2" target="_blank" rel="noreferrer">
            <img src="/github.png" width="32" height="32" alt="GitHub" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
