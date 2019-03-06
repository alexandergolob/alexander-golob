const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (
    node.internal.type === 'MarkdownRemark' &&
    node.fileAbsolutePath.includes('/pages/')
  ) {
    const value = createFilePath({ node, getNode }).replace(
      /\/project-categories|\/project-subcategories/,
      ''
    );

    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allFile(
        filter: { sourceInstanceName: { eq: "pages" }, extension: { eq: "md" } }
      ) {
        edges {
          node {
            childMarkdownRemark {
              id
              fields {
                slug
              }
              frontmatter {
                templateKey
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const pages = result.data.allFile.edges.map(({ node }) => ({
      id: node.childMarkdownRemark.id,
      slug: node.childMarkdownRemark.fields.slug,
      templateKey: node.childMarkdownRemark.frontmatter.templateKey
    }));

    pages.forEach(({ id, slug, templateKey }) => {
      const templateFilename =
        templateKey || `${slug.replace(/\//g, '') || 'index'}-page`;

      console.log(templateFilename);
      createPage({
        path: slug,
        component: path.resolve(`src/templates/${String(templateFilename)}.js`),
        context: {
          id
        }
      });
    });
  });
};
