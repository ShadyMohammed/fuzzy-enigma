const path = require('path');
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const templatesPath = './src/pages';
  const loadCategories = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulCategory {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `).then(result => {
      if (result.error) reject(result.error);
      const categories = result.data.allContentfulCategory.edges;
      categories.forEach(({ node }) => {
        createPage({
          path: `/categories/${node.slug}`,
          component: path.resolve(`${templatesPath}/CategoryPage.tsx`),
          context: {
            slug: node.slug
          }
        });
      });
      resolve();
    });
  });

  const loadPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPost {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `).then(result => {
      if (result.error) reject(result.error);
      const posts = result.data.allContentfulPost.edges;
      posts.forEach(({ node }) => {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`${templatesPath}/PostPage.tsx`),
          context: {
            slug: node.slug
          }
        });
      });

      resolve();
    });
  });

  return Promise.all([loadCategories, loadPosts]);
};
