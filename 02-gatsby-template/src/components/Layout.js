import React from "react";
import "minireset.css";
import "./global.css";
import { container, copyright, footer } from "./Layout.module.css";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div className={container}>
      <Header />
      <main>{props.children}</main>
      <footer className={footer}>
        <p className={copyright}>&copy; 2020 つのぶえ出版</p>
      </footer>
    </div>
  );
};

export default Layout;
