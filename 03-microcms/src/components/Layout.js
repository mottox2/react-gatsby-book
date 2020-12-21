import React from "react";

import Header from "./header";
import "minireset.css";
import "fontsource-fira-sans/700-italic.css";
import "./layout.css";
import { SideSection } from "./SideSection";

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle={`Title`} />
      <div className="container">
        <main className="layout-main">{children}</main>
        <aside className="layout-side">
          <SideSection title="Profile">
            <div style={{ fontSize: 12 }}>
              都内でウェブサービスやスマホアプリを作るフロントエンドエンジニア・UIデザイナーです。
              新規事業の爆速立ち上げや、使いやすいSPAの開発が得意です。
            </div>
          </SideSection>
        </aside>
      </div>
      <footer className="footer">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </>
  );
};

export default Layout;
