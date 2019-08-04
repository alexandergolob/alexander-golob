require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    siteUrl: 'https://alexander-golob.netlify.com',
    pathPrefix: '/'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/admin/*']
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/static/assets`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'shared-components',
        path: `${__dirname}/src/shared-components`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'site-settings',
        path: `${__dirname}/src/site-settings`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'texture-images',
        path: `${__dirname}/src/texture-images`
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: { name: 'uploads' }
          },
          {
            resolve: 'gatsby-remark-images',
            options: { maxWidth: 3840 }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'alexandergolobart'
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify-headers'
  ]
};
