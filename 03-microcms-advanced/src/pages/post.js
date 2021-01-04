import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import PostContent from "../components/PostContent";

const post = {
  slug: "react",
  title: "Reactサイコー！",
  content: `<p>ReactはFacebookの提供するUIライブラリ。<br/><b>コンポーネント志向</b>ですごく書きやすい。</p>`,
  publishedAt: "2020.12.21 14:23",
  category: {
    slug: "dev",
    name: "開発",
  },
  thumbnail: {
    url: "/gatsby-icon.png",
  },
};

const PostPage = () => {
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

export default PostPage;
