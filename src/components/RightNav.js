import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';

import UnstyledSocialIcons from './SocialIcons';
import Link from './InternalLink';

const SecondaryLogoContainer = styled.div`
  margin-bottom: 25px;
  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  padding: 15px;
  display: grid;
  place-items: center;
`;

const SecondaryLogo = styled(GatsbyImage)``;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;

const NavListItemLink = styled(Link)`
  margin-bottom: 15px;
  &:last-of-type {
    margin-bottom: 0;
  }

  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
`;

const NavListItem = styled.li`
  padding: 10px;
  text-align: center;
  font-family: ${props => props.theme.fonts.serif};
  font-weight: 600;
`;

const SocialIcons = styled(UnstyledSocialIcons)`
  display: flex;
  justify-content: space-around;
  font-size: 1.25em;
`;

const SocialIconsBox = styled(NavListItem)`
  margin-bottom: 15px;

  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
`;

const ContactLink = styled(NavListItemLink)`
  margin-top: 15px;
`;

const ContactItem = styled(NavListItem)`
  padding: 1.25em 0;
  background: url('/assets/contact-button-bg.png'), hsl(0, 0%, 93%);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  color: hsl(148, 93%, 5%);
`;

const EmptyMarbleSquare = styled.div`
  margin-top: 1.5em;
  border: ${props => props.theme.misc.frameBorder};
  background: url('/assets/empty-square-bg.png'), hsl(148, 93%, 5%);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  height: 7.5em;
`;

const RightNav = ({ secondaryLogo, items, ...rest }) => (
  <div {...rest}>
    <SecondaryLogoContainer>
      <SecondaryLogo fixed={secondaryLogo} />
    </SecondaryLogoContainer>
    <nav>
      <NavList>
        <SocialIconsBox>
          <SocialIcons />
        </SocialIconsBox>
        {items.map(({ category, path }, i) => (
          <NavListItemLink key={i} to={path}>
            <NavListItem>{category}</NavListItem>
          </NavListItemLink>
        ))}
        <ContactLink to='/contact'>
          <ContactItem>Contact</ContactItem>
        </ContactLink>
      </NavList>
    </nav>
    <EmptyMarbleSquare />
  </div>
);

const query = graphql`
  {
    file(
      sourceInstanceName: { eq: "shared-components" }
      relativePath: { eq: "right-nav.md" }
    ) {
      childMarkdownRemark {
        frontmatter {
          secondaryLogo {
            childImageSharp {
              fixed(height: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          items {
            category
            path
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
    <RightNav
      {...frontmatter}
      secondaryLogo={frontmatter.secondaryLogo.childImageSharp.fixed}
      {...props}
    />
  );
};
