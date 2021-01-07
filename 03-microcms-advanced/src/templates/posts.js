import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import PostList from "../components/PostList";
import Pagination from "../components/Pagination";

const PostsPage = (props) => {
  const posts = props.data.allMicrocmsPost.nodes;
  const { currentPage, numPages } = props.pageContext;
  return (
    <Layout>
      <Helmet>
        <title>Gatsby Blog</title>
        <meta
          name="description"
          content="GatsbyとHeadless CMSを組み合わせて作るサンプルアプリケーションです。"
        />
      </Helmet>
      <PostList posts={posts} />
      <Pagination
        currentPage={currentPage}
        numPages={numPages}
        basePath={"/"}
      />
    </Layout>
  );
};

export const query = graphql`
  query PostsQuery($skip: Int!, $limit: Int!) {
    allMicrocmsPost(skip: $skip, limit: $limit) {
      nodes {
        slug
        title
        content
        publishedAt(formatString: "YYYY.MM.DD hh:mm")
        category {
          slug
          name
        }
        thumbnail {
          url
        }
      }
    }
  }
`;

export default PostsPage;
