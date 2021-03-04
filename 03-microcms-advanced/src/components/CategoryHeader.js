import React from "react";
import * as styles from "./SideSection.module.css";

const CategoryHeader = (props) => {
  const { title, children } = props;
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default CategoryHeader;
