import React from "react";
import { Link } from "gatsby";
import * as styles from "./WorkItem.module.css";

const WorkItem = (props) => {
  const { slug, title, roles, imageUrl } = props.work;
  return (
    <Link className={styles.container} to={`works/${slug}`}>
      <div className={styles.thumbnail}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.roles}>{roles.join(", ")}</div>
    </Link>
  );
};

export default WorkItem;
