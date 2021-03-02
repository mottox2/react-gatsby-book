import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { heading, profile, workItems } from "./index.module.css";
import Layout from "../components/Layout";
import PostItem from "../components/PostItem";
import WorkItem from "../components/WorkItem";

const IndexPage = (props) => {
  const { allFeedQiita, allWorksYaml } = props.data;
  return (
    <Layout>
      <Helmet>
        <title>My Gatsby Site</title>
        <meta name="description" content="My first react website" />
      </Helmet>
      <h2 className={heading}>About</h2>
      <p className={profile}>
        都内でウェブサービスやスマホアプリを作るフロントエンドエンジニア・UIデザイナーです。
        新規事業の爆速立ち上げや、使いやすいSPAの開発が得意です。
      </p>
      <h2 className={heading}>Posts</h2>
      {allFeedQiita.nodes.map((post) => {
        return <PostItem post={post} />;
      })}
      <h2 className={heading}>Works</h2>
      <div className={workItems}>
        {
          allWorksYaml.nodes.map(work => {
            return <WorkItem work={work} />
          })
        }
      </div>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allFeedQiita(limit: 3) {
      nodes {
        title
        link
        pubDate(formatString: "YYYY.MM.DD")
      }
    }
    allWorksYaml(limit: 4) {
      nodes {
        slug
        title
        description
        imageUrl
        roles
      }
    }
  }
`;

export default IndexPage;
