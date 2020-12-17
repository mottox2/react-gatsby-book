import React from "react";
import ReactDOM from "react-dom";
import "minireset.css";
import "./index.css";
import App from "./App";

const posts = [
  {
    title:
      "Next.js 9.4 Fast RefreshとIncremental Static Regeneration等のアップデート",
    date: "2020.10.23",
    url: 'https://qiita.com',
  },
  {
    title: "Next.js 9.3: 新世代の静的サイト生成、Built-in Sassのサポート",
    date: "2020.03.10",
    url: 'https://qiita.com',
  },
  {
    title: "Serverless Next.jsをCloud Functionsにデプロイする",
    date: "2019.04.28",
    url: 'https://qiita.com',
  },
];

ReactDOM.render(<App posts={posts} />, document.getElementById("root"));
