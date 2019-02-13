module.exports = {
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/hero/`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: []
      }
    }
  ]
};
