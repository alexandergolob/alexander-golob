import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import UnstyledHomeLogo from './HomeLogo';
import Link from './InternalLink';

const HomeLogo = styled(UnstyledHomeLogo)`
  margin-bottom: 0.5em;
  background: ${props => props.theme.colors.background};
`;

const Nav = styled.nav`
  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.background};
  padding: 15px;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  font-family: ${props => props.theme.fonts.serif};
`;

const NavItemTitleLink = styled(Link)`
  margin-bottom: 5px;
  display: block;
`;

const NavItemTitle = styled.div`
  font-weight: 600;
`;

const SubList = styled.ul`
  list-style-type: none;
  padding-left: 10px;
`;

const SubListItemLink = styled(Link)`
  margin-bottom: 2px;
  &:last-of-type {
    margin-bottom: 0;
  }

  display: block;
`;

const SubListItem = styled.li``;

const UnstyledNavItem = ({ category, path, subitems, ...rest }) => (
  <li {...rest}>
    <NavItemTitleLink to={path}>
      <NavItemTitle>{category}</NavItemTitle>
    </NavItemTitleLink>

    <SubList>
      {subitems.map(({ subitem, path }, i) => (
        <SubListItemLink to={path} key={i}>
          <SubListItem>{subitem}</SubListItem>
        </SubListItemLink>
      ))}
    </SubList>
  </li>
);

const NavItem = styled(UnstyledNavItem)`
  margin-bottom: 1.5em;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const LeftNav = ({ homeLogo, items, ...rest }) => (
  <div {...rest}>
    <HomeLogo {...homeLogo} />
    <Nav>
      <NavList>
        {items.map(item => (
          <NavItem key={item.category} {...item} />
        ))}
      </NavList>
    </Nav>
  </div>
);

const query = graphql`
  {
    file(
      sourceInstanceName: { eq: "shared-components" }
      relativePath: { eq: "left-nav.md" }
    ) {
      childMarkdownRemark {
        frontmatter {
          homeLogo {
            text
            logo {
              childImageSharp {
                fixed(height: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          items {
            category
            path
            subitems {
              path
              subitem
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
    <LeftNav
      {...frontmatter}
      homeLogo={{
        ...frontmatter.homeLogo,
        logo: frontmatter.homeLogo.logo.childImageSharp.fixed
      }}
      {...props}
    />
  );
};
