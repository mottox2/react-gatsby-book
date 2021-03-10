# 『React & GatsbyJS 開発入門』 サポートページ

本リポジトリは 『React & GatsbyJS 開発入門』 のサポートページです。本書中のサンプルコードや正誤表を収録しています。

## サンプルコードの修正

2021/03/02にGatsbyのメジャーバージョンが実施され、紙面のコードに修正が必要です。

下記のようにCSS Modulesのインポートを行う際に、`* as`をつけると動作します。

```diff
- import styles from "./index.module.css"
+ import * as styles from "./index.module.css"
```

## 過去の版をお持ちの方はこちら

過去の版をお持ちの方は下記のリンクからサポート情報をご覧ください。

- [技術書展10 2021-01-07 版のサポートページ](https://github.com/mottox2/react-gatsby-book/tree/2021-01-07)
