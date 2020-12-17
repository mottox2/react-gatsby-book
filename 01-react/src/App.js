import styles from "./App.module.css";
import Layout from "./Layout";

const App = () => {
  return (
    <Layout>
      <h2 className={styles.heading}>About</h2>
      <p className={styles.profile}>
        都内でウェブサービスやスマホアプリを作るフロントエンドエンジニア・UIデザイナーです。
        新規事業の爆速立ち上げや、使いやすいSPAの開発が得意です。
      </p>
      <h2 className={styles.heading}>Posts</h2>
      <p>Hello Gatsby</p>
      <h2 className={styles.heading}>Works</h2>
      <p>Hello Gatsby</p>
    </Layout>
  );
};

export default App;
