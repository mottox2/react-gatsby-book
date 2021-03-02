import React from "react";
import { Link } from "gatsby";
import {
  container,
  thumbnail,
  title as titleStyle,
  roles as rolesStyle,
} from "./WorkItem.module.css";

const WorkItem = (props) => {
  const { slug, title, roles, imageUrl } = props.work;
  return (
    <Link className={container} to={`works/${slug}`}>
      <div className={thumbnail}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={titleStyle}>{title}</div>
      <div className={rolesStyle}>{roles.join(", ")}</div>
    </Link>
  );
};

export default WorkItem;
