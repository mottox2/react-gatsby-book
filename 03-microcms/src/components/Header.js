import { Link } from "gatsby";
import React from "react";

const Header = ({ siteTitle }) => {
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

  return (
    <header className="header">
      <div className="container">
        <ul className="categories">
          {categories.map((category) => {
            return (
              <li className="category" key={category.slug}>
                {category.name}
              </li>
            );
          })}
        </ul>
        <img src="/github.png" width="32" height="32" alt="GitHub" />
        <h1 style={{ margin: 0 }}>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
