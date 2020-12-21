import * as React from "react"
import Layout from "../components/Layout";
import PostList from "../components/PostList";

const IndexPage = () => {
  return (
    <Layout>
      <PostList posts={[]} />
    </Layout>
  );
}

export default IndexPage
