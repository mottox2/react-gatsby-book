import React from "react";
import {
  container,
  date as dateStyle,
  title as titleStyle,
} from "./PostItem.module.css";

const PostItem = (props) => {
  const { title, pubDate, link } = props.post;
  return (
    <div className={container}>
      <a href={link}>
        <span className={dateStyle}>{pubDate}</span>
        <span className={titleStyle}>{title}</span>
      </a>
    </div>
  );
};

export default PostItem;
