module.exports = {
  siteMetadata: {
    title: "04-local-plugin",
  },
  plugins: [
    {
      resolve: "my-plugin",
      options: {
        hello: "world",
      },
    },
  ],
};
