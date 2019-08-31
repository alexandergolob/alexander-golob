import React from 'react';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import { media } from './ThemeProvider';
import UnstyledSocialIcons from './SocialIcons';
import Link from './Link';

import LightMarble from './LightMarble';

const Container = styled.footer`
  position: relative;
  border-top: 2px solid #000;
  padding: 20px 60px 7px;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-areas:
    'SupportUs Logo SocialIconsContainer'
    'DevCredit Logo SocialIconsContainer'
    'Copyright Copyright Copyright';

  font-family: ${props => props.theme.fonts.serif};

  ${media.tablet`
    padding-left: 20px;
    padding-right: 20px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'Logo SocialIconsContainer'
      'Copyright Copyright';
    grid-row-gap: 0.5em;
  `}
`;

const SupportUs = styled(Link)`
  color: inherit;
  font: inherit;
  text-decoration: none;
  margin-bottom: 5px;
  grid-area: SupportUs;
  font-weight: 600;
  align-self: end;

  ${media.tablet`display: none;`}
`;

const DevCredit = styled.div`
  grid-area: DevCredit;

  ${media.tablet`display: none;`}
`;

const DevLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-weight: 600;
`;

const Logo = styled.div`
  grid-area: Logo;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 2.5em;

  ${media.tablet`
    justify-self: center;
    justify-content: flex-start;
    font-size: 1.75em;
  `}
  ${media.mobile`font-size: 1.25em;`}
`;

const LogoImg = styled(GatsbyImage)`
  margin-right: 10px;
  width: 30px;

  ${media.tablet`
    margin-right: 5px;
    width: 20px;
  `}
`;

const SocialIcons = styled(UnstyledSocialIcons)`
  grid-area: SocialIconsContainer;
  justify-self: end;
  font-size: 1.5em;

  > * {
    margin-right: 10px;
    :last-of-type {
      margin-right: 0;
    }
  }

  ${media.tablet`justify-self: center;`}
  ${media.mobile`font-size: 1.25em;`}
`;

const Copyright = styled.div`
  grid-area: Copyright;
  text-align: center;
  font-family: sans-serif;
  font-size: 0.85em;
`;

const DesktopCopyright = styled.span`
  ${media.tablet`display: none;`}
`;

const ResponsiveCopyright = styled.span`
  display: none;
  ${media.tablet`display: inline-block;`}
`;

const Footer = ({
  supportLink,
  boldLeftStatement,
  middleStatement,
  ...rest
}) => (
  <Container {...rest}>
    <LightMarble />
    <SupportUs external={supportLink.external} path={supportLink.path}>
      {boldLeftStatement}
    </SupportUs>
    <DevCredit>
      developed by{' '}
      <DevLink external path='https://kbaig.me'>
        Kaz Baig
      </DevLink>
    </DevCredit>
    <Logo>
      <LogoImg fluid={middleStatement.img} alt='logo' />
      {middleStatement.text}
    </Logo>
    <SocialIcons />
    <Copyright>
      <DesktopCopyright>&copy; {new Date().getFullYear()}</DesktopCopyright>
      <ResponsiveCopyright>
        &copy; {new Date().getFullYear()} developed by{' '}
        <DevLink external path='https://kbaig.me'>
          Kaz Baig
        </DevLink>
        , designed by <DevLink path='/'>Golob Art</DevLink>
      </ResponsiveCopyright>
    </Copyright>
  </Container>
);

const query = graphql`
  {
    file(
      sourceInstanceName: { eq: "shared-components" }
      relativePath: { eq: "footer.md" }
    ) {
      childMarkdownRemark {
        frontmatter {
          supportLink {
            external
            path
          }
          boldLeftStatement
          middleStatement {
            text
            img {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default props => {
  const data = useStaticQuery(query);
  const { frontmatter } = data.file.childMarkdownRemark;

  return (
    <Footer
      {...frontmatter}
      middleStatement={{
        ...frontmatter.middleStatement,
        img: frontmatter.middleStatement.img.childImageSharp.fluid
      }}
      {...props}
    />
  );
};
