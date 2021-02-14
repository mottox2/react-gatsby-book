import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";
import PostList from "../../components/PostList";

const CategoryPage = (props) => {
  const category = props.data.microcmsCategory;
  const posts = props.data.allMicrocmsPost.nodes;
  return (
    <Layout>
      <Helmet>
        <title>{category.name}</title>
        <meta name="description" content={category.description} />
      </Helmet>
      <PostList posts={posts} />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    microcmsCategory(slug: { eq: $slug }) {
      slug
      name
      description
    }
    allMicrocmsPost(filter: { category: { slug: { eq: $slug } } }) {
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

export default CategoryPage;
