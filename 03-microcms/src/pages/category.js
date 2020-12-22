import * as React from "react";
import Layout from "../components/Layout";
import PostList from "../components/PostList";

const posts = [
  {
    slug: "react",
    title: "Reactサイコー！",
    content: `<p>ReactはFacebookの提供するUIライブラリ。コンポーネント志向ですごく書きやすい。</p>`,
    publishedAt: "2020.12.21 14:23",
    category: {
      slug: "dev",
      name: "開発",
    },
    thumbnail: {
      url: "/gatsby-icon.png",
    },
  },
  {
    slug: "gatsby",
    title: "Gatsbyもいいぞ",
    content: "<p>Gatsbyを使うと爆速サイトができるからいいよ</p>",
    publishedAt: "2020.12.23 07:34",
    category: {
      slug: "dev",
      name: "開発",
    },
    thumbnail: {
      url: "/gatsby-icon.png",
    },
  },
];

const CategoryPage = () => {
  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  );
};

export default CategoryPage;
