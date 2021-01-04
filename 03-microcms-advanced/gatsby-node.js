const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMicrocmsCategory {
        nodes {
          slug
        }
      }
    }
  `);
  const categories = result.data.allMicrocmsCategory.nodes;

  categories.map((category) => {
    createPage({
      path: `categories/${category.slug}`,
      component: path.resolve("./src/templates/category.js"),
      context: {
        slug: category.slug,
      },
    });
  });
};
