module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
    description: "Hello Gatsby",
  },
  plugins: [
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://qiita.com/mottox2/feed`,
        name: `Qiita`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "works",
        path: `${__dirname}/src/works.yaml`,
      },
    },
    "gatsby-transformer-yaml",
    "gatsby-plugin-typegen",
  ],
};
