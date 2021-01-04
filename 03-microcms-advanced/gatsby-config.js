module.exports = {
  siteMetadata: {
    title: "03-microcms",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.MICROCMS_API_KEY,
        serviceId: "gatsby-microcms-blog",
        apis: [
          {
            endpoint: "post",
          },
          {
            endpoint: "category",
          },
        ],
      },
    },
  ],
};
