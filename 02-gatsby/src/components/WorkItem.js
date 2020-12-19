import React from "react";
import styles from "./WorkItem.module.css";

const WorkItem = (props) => {
  const { title, roles, imageUrl } = props.work;
  return (
    <div className={styles.container}>
      <div className={styles.thumbnail}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.roles}>{roles.join(", ")}</div>
    </div>
  );
};

export default WorkItem;
