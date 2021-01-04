import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";
import PostContent from "../../components/PostContent";

const PostPage = (props) => {
  const post = props.data.microcmsPost;
  return (
    <Layout>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={`${post.title}`} />
      </Helmet>
      <PostContent post={post} />
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    microcmsPost(id: { eq: $id }) {
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
`;

export default PostPage;
