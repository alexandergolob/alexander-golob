import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';

import UnstyledSocialIcons from './SocialIcons';
import Link from './Link';

import GreenMarble from './GreenMarble';

const SecondaryLogoContainer = styled.div`
  margin-bottom: 25px;
  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SecondaryLogo = styled(GatsbyImage)``;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;

const NavListItemLink = styled(Link)`
  font: inherit;
  color: inherit;
  text-decoration: none;
  margin-bottom: 7px;
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
  font-size: 0.9em;
`;

const SocialIcons = styled(UnstyledSocialIcons)`
  display: flex;
  justify-content: space-around;
  font-size: 1.25em;
`;

const SocialIconsBox = styled(NavListItem)`
  margin-bottom: 7px;
  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
`;

const ContactLink = styled(NavListItemLink)`
  margin-top: 18px;
  position: relative;
  background: none;
`;

const ContactItem = styled(NavListItem)`
  padding: 1.25em 0;
  color: hsl(148, 93%, 5%);
`;

// const EmptyMarbleSquare = styled.div`
//   position: relative;
//   margin-top: 1em;
//   border: ${props => props.theme.misc.frameBorder};
//   height: 7.5em;
// `;

const RightNav = ({
  secondaryLogo,
  items,
  replacementComponent: ReplacementComponent,
  ...rest
}) => (
  <div {...rest}>
    <SecondaryLogoContainer>
      {ReplacementComponent ? (
        <ReplacementComponent />
      ) : (
        <SecondaryLogo fixed={secondaryLogo} alt='' />
      )}
    </SecondaryLogoContainer>
    <nav>
      <NavList>
        <SocialIconsBox>
          <SocialIcons />
        </SocialIconsBox>
        {items.map(({ external, category, path }, i) => (
          <NavListItemLink key={i} external={external} path={path}>
            <NavListItem>{category}</NavListItem>
          </NavListItemLink>
        ))}
        <ContactLink path='/contact'>
          <GreenMarble />
          <ContactItem>Contact</ContactItem>
        </ContactLink>
      </NavList>
    </nav>
    {/* <EmptyMarbleSquare>
      <GreenMarble />
    </EmptyMarbleSquare> */}
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
            external
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
