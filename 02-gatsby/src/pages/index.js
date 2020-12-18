import * as React from "react";
import { graphql } from "gatsby";

const PostItem = (props) => {
  const { title, link, pubDate } = props.post;
  return (
    <li>
      <a href={link}>
        <small>{pubDate}</small> {title}
      </a>
    </li>
  );
};

const IndexPage = (props) => {
  return (
    <ul>
      {props.data.allFeedQiita.nodes.map((post) => {
        return <PostItem post={post} key={post.link} />;
      })}
    </ul>
  );
};

export const query = graphql`
  query MyQuery {
    allFeedQiita {
      nodes {
        title
        link
        pubDate
      }
    }
  }
`;

export default IndexPage;
