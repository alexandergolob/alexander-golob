const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (
    node.internal.type === 'MarkdownRemark' &&
    !node.fileAbsolutePath.includes('/site-settings/')
  ) {
    const value = createFilePath({ node, getNode }).replace(
      '/project-categories-and-subcategories',
      ''
    );

    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
