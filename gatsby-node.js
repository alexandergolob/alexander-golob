const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const transformMarkdownFields = require('./utils/transformMarkdownFields');
const _ = require('lodash');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node);

  // only create pages from the .md files in /pages so that things like site settings are ignored
  if (
    node.internal.type === 'MarkdownRemark' &&
    node.fileAbsolutePath.includes('/pages/')
  ) {
    const { templateKey, path } = node.frontmatter;

    let slug = createFilePath({ node, getNode }).replace(
      /[^\/]*\/$/,
      str => `${_.kebabCase(str)}/`
    );

    // path prefix for project categories and subcategories is /projects
    if (
      templateKey === 'project-category' ||
      templateKey === 'project-subcategory'
    ) {
      slug = slug.replace(
        /^\/(project-categories|project-subcategories)\//,
        '/projects/'
      );
    }

    // create slug field based on path in frontmatter, or file name if path not specified
    if (path) {
      slug = slug.replace(
        /\/[^\/]+\/$/,
        path.replace(/\/*$/, '/') // ensure one trailing slash
      );
    }

    // instantiate slug
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
                title
                subcategorySections {
                  subcategory
                }
              }
            }
          }
        }
      }
      blog: allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        sort: { fields: [frontmatter___date], order: [ASC] }
      ) {
        edges {
          node {
            id
            frontmatter {
              path
              title
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const blogPosts = result.data.blog.edges.map(({ node }) => ({
      id: node.id,
      path: node.frontmatter.path,
      title: node.frontmatter.title,
      tags: node.frontmatter.tags
    }));

    console.log('hello');
    result.data.pages.edges.forEach(({ node }) =>
      console.log(node.childMarkdownRemark.id, node.childMarkdownRemark.fields)
    );
    // console.log(node.childMarkdownRemark);
    // console.log(node.childMarkdownRemark.fields.slug);

    const pages = result.data.pages.edges.map(({ node }) => ({
      id: node.childMarkdownRemark.id,
      slug: node.childMarkdownRemark.fields.slug,
      templateKey: node.childMarkdownRemark.frontmatter.templateKey,
      category: node.childMarkdownRemark.frontmatter.title,
      subcategory: node.childMarkdownRemark.frontmatter.title,
      subcategories:
        node.childMarkdownRemark.frontmatter.subcategorySections &&
        node.childMarkdownRemark.frontmatter.subcategorySections.map(
          ({ subcategory }) => subcategory
        )
    }));

    // post limit on paginated collection-type pages
    const postsPerPage = 6;

    pages.forEach(
      ({ id, slug, templateKey, category, subcategory, subcategories }) => {
        const templateFilename =
          templateKey || `${slug.replace(/\//g, '') || 'index'}-page`;

        let context = { id };

        const component = path.resolve(
          `src/templates/${String(templateFilename)}.js`
        );

        // special handling of pagination-enabled collection pages
        if (templateFilename === 'blog-page') {
          const numPages = Math.ceil((blogPosts.length - 1) / postsPerPage);
          Array.from({ length: numPages }).forEach((_, i) => {
            createPage({
              path: i === 0 ? '/blog' : `/blog/${i + 1}`,
              component,
              context: {
                ...context,
                limit: postsPerPage,
                skip: i * postsPerPage + 1, // skip 1 extra for featured post
                numPages,
                currentPage: i + 1
              }
            });
          });
        } else {
          // rest of page types

          if (templateFilename === 'blog-post') {
            // add pagination for blog post
            context.pagination = {};
            const index = blogPosts.findIndex(post => post.id === id);
            if (index > 0) {
              const { path, title } = blogPosts[index - 1];
              context.pagination.prev = { path: `/blog${path}`, title };
            }
            if (index < blogPosts.length - 1) {
              const { path, title } = blogPosts[index + 1];
              context.pagination.next = { path: `/blog${path}`, title };
            }
          } else if (templateFilename === 'project-category') {
            context.category = category;
            context.subcategories = subcategories || [];
          } else if (templateFilename === 'project-subcategory') {
            context.subcategory = subcategory;
          }

          createPage({
            path: slug,
            component,
            context
          });
        }
      }
    );

    // find unique tags and create pages for them
    const tagsWithRepeats = blogPosts
      .map(({ tags }) => tags)
      .reduce((acc, arr) => [...acc, ...arr], []);

    const tags = [...new Set(tagsWithRepeats)];

    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: path.resolve('src/templates/tag.js'),
        context: {
          tag
        }
      });
    });
  });
};
