const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMicrocmsPost {
        nodes {
          slug
        }
      }
    }
  `);

  const posts = result.data.allMicrocmsPost.nodes;
  const postsPerPage = 1;
  const numPages = Math.ceil(posts.length / postsPerPage);
  posts.map((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/page/${i + 1}`,
      component: path.resolve("./src/templates/posts.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};
