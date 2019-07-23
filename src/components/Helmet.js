import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql, withPrefix } from 'gatsby';
import { Location } from '@reach/router';

const query = graphql`
  query {
    favicon: file(
      sourceInstanceName: { eq: "site-settings" }
      relativePath: { eq: "logo.md" }
    ) {
      childMarkdownRemark {
        frontmatter {
          logo {
            childImageSharp {
              fixed(width: 80) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
    SEO: file(
      sourceInstanceName: { eq: "site-settings" }
      relativePath: { eq: "SEO.md" }
    ) {
      childMarkdownRemark {
        frontmatter {
          siteTitle
          siteDescription
        }
      }
    }
  }
`;

export default ({
  title,
  description,
  ogType = 'website',
  ogImage,
  ...rest
}) => {
  const data = useStaticQuery(query);
  const favicon =
    data.favicon.childMarkdownRemark.frontmatter.logo.childImageSharp.fixed;
  const {
    siteTitle,
    siteDescription
  } = data.SEO.childMarkdownRemark.frontmatter;

  return (
    <Location>
      {({ location }) => (
        <Helmet defer={false} {...rest}>
          <html lang='en' prefix='og: http://ogp.me/ns#' />
          <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
          <meta
            name='description'
            content={
              description
                ? `${description} ${siteDescription}`
                : siteDescription
            }
          />
          <link rel='shortcut icon' href={favicon.base64} type='image/x-icon' />

          {/* social graph */}
          <meta
            property='og:title'
            content={title ? `${title} | ${siteTitle}` : siteTitle}
          />
          <meta property='og:type' content={ogType} />
          <meta
            property='og:image'
            content={`${process.env.GATSBY_URL}${withPrefix(
              ogImage ? ogImage : favicon.src
            )}`}
          />
          <meta
            property='og:url'
            content={`${process.env.GATSBY_URL}${location.pathname}`}
          />
          <meta
            property='og:description'
            content={
              description
                ? `${description} ${siteDescription}`
                : siteDescription
            }
          />
          <meta property='og:site_name' content={siteTitle} />
        </Helmet>
      )}
    </Location>
  );
};
