import React from "react";
import * as styles from "./PostItem.module.css";

const PostItem = (props) => {
  const { title, pubDate, link } = props.post;
  return (
    <div className={styles.container}>
      <a href={link}>
        <span className={styles.date}>{pubDate}</span>
        <span className={styles.title}>{title}</span>
      </a>
    </div>
  );
};

export default PostItem;
