import React from "react";
import "minireset.css";
import "./global.css";
import * as styles from "./Layout.module.css";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      <main>{props.children}</main>
      <footer className={styles.footer}>
        <p className={styles.copyright}>&copy; 2020 つのぶえ出版</p>
      </footer>
    </div>
  );
};

export default Layout;
