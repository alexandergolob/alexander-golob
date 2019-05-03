const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const transformMarkdownFields = require('./utils/transformMarkdownFields');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node);

  // only create pages from the .md files in /pages so that things like site settings are ignored
  if (
    node.internal.type === 'MarkdownRemark' &&
    node.fileAbsolutePath.includes('/pages/')
  ) {
    // create slug field based on path in frontmatter, or file name if path not specified
    let slug;
    if (node.frontmatter.path) {
      slug = createFilePath({ node, getNode }).replace(
        /\/[^\/]+\/$/,
        node.frontmatter.path
      );
    } else {
      slug = createFilePath({ node, getNode });
    }

    createNodeField({
      name: 'slug',
      node,
      value: slug
    });

    // find frontmatter fields prexifed with "md_" to indicate they contain markdown,
    // searches for field in nested objects and arrays
    // transform into html, and create node field where md keys have "md_" prefix stripped
    const transformedFields = transformMarkdownFields(node.frontmatter);

    Object.keys(transformedFields).forEach(field => {
      createNodeField({
        name: field,
        node,
        value: transformedFields[field]
      });
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  return graphql(`
    {
      pages: allFile(
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
      return Promise.reject(result.errors);
    }

    const pages = result.data.pages.edges.map(({ node }) => ({
      id: node.childMarkdownRemark.id,
      slug: node.childMarkdownRemark.fields.slug,
      templateKey: node.childMarkdownRemark.frontmatter.templateKey
    }));

    pages.forEach(({ id, slug, templateKey }) => {
      const templateFilename =
        templateKey || `${slug.replace(/\//g, '') || 'index'}-page`;

      createPage({
        path: slug,
        component: path.resolve(`src/templates/${String(templateFilename)}.js`),
        context: {
          id
        }
      });
    });

    // find unique tags and create pages for them
    // const tagsWithRepeats = result.data.tags.edges
    //   .map(({ node }) => node.frontmatter.tags)
    //   .reduce((acc, arr) => [...acc, ...arr], []);

    // const tags = [...new Set(tagsWithRepeats)];

    // tags.forEach(tag => {
    //   createPage({
    //     path: `/tags/${tag.toLowerCase().replace(/ /g, '-')}`,
    //     component: path.resolve('src/templates/tag.js'),
    //     context: {
    //       tag
    //     }
    //   });
    // });
  });
};

// tags: allMarkdownRemark(
//   filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
// ) {
//   edges {
//     node {
//       frontmatter {
//         tags
//       }
//     }
//   }
// }
