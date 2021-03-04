import * as React from "react";
import { Helmet } from "react-helmet";
import * as styles from "./index.module.css";
import Layout from "../components/Layout";
import PostItem from "../components/PostItem";
import WorkItem from "../components/WorkItem";

const posts = [
  {
    title:
      "Next.js 9.4 Fast RefreshとIncremental Static Regeneration等のアップデート",
    pubDate: "2020.10.23",
    link: "https://qiita.com",
  },
  {
    title: "Next.js 9.3: 新世代の静的サイト生成、Built-in Sassのサポート",
    pubDate: "2020.03.10",
    link: "https://qiita.com",
  },
  {
    title: "Serverless Next.jsをCloud Functionsにデプロイする",
    pubDate: "2019.04.28",
    link: "https://qiita.com",
  },
];

const works = [
  {
    title: "『執筆DAYS』 リニューアル",
    roles: ["WordPress", "React"],
    imageUrl: "/work.png",
  },
  {
    title: "『締め切りTU-RYDAY』公式サイト",
    roles: ["React", "Gatsby", "Figma"],
    imageUrl: "/work.png",
  },
  {
    title: "『ブルーバードコミックス』サービスサイト",
    roles: ["React", "Next.js"],
    imageUrl: "/work.png",
  },
];

const IndexPage = (props) => {
  return (
    <Layout>
      <Helmet>
        <title>My Gatsby Site</title>
        <meta name="description" content="My first react website" />
      </Helmet>
      <h2 className={styles.heading}>About</h2>
      <p className={styles.profile}>
        都内でウェブサービスやスマホアプリを作るフロントエンドエンジニア・UIデザイナーです。
        新規事業の爆速立ち上げや、使いやすいSPAの開発が得意です。
      </p>
      <h2 className={styles.heading}>Posts</h2>
      {posts.map((post) => {
        return <PostItem post={post} />;
      })}
      <h2 className={styles.heading}>Works</h2>
      <div className={styles.workItems}>
        {works.map((work) => {
          return <WorkItem work={work} />;
        })}
      </div>
    </Layout>
  );
};

export default IndexPage;
