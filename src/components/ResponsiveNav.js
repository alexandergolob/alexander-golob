import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
// import Image from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faAngleDown,
  faAngleUp
} from '@fortawesome/free-solid-svg-icons';

import { media } from './ThemeProvider';
import UnstyledSocialIcons from './SocialIcons';
import InternalLink from './InternalLink';

import LightMarble from './LightMarble';

const Nav = styled.nav`
  position: relative;
  padding: 20px;
`;

const LogoAndText = styled.div`
  margin-bottom: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const Logo = styled(Image)`
//   margin-right: 0.2em;

//   /* ${media.tablet`height: 80px;`} */
//   /* ${media.mobile`font-size: 1.5em;`} */
// `;

const LogoText = styled.div`
  font-family: ${props => props.theme.fonts.serif};
  font-weight: 500;
  font-size: 2.5em;

  ${media.tablet`font-size: 2em;`}
  ${media.mobile`font-size: 1.5em;`}
`;

const SocialIcons = styled(UnstyledSocialIcons)`
  display: flex;
  justify-content: center;
  font-size: 1.5em;

  > * {
    margin-right: 0.6em;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const TogglerContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
`;

const Toggler = styled.button`
  cursor: pointer;
  background: ${props => props.theme.colors.offLight};
  border: 1px solid black;
  width: 40px;
  height: 40px;
`;

const HamburgerIcon = styled(FontAwesomeIcon).attrs(props => ({
  icon: props.isExpanded ? faTimes : faBars
}))`
  color: hsla(33, 29%, 62%, 1);
  font-size: 1.8em;
`;

const Menu = styled.ul`
  list-style-type: none;
  position: absolute;
  top: 100%;
  right: 100%;
  width: 250px;
  border: 1px solid black;
  border-bottom: none;
  background: ${props => props.theme.colors.offLight};
  display: ${props => (props.show ? 'block' : 'none')};
  font-family: ${props => props.theme.fonts.serif};
`;

const MenuItemContainer = styled.li`
  min-height: 40px;
  border-bottom: 1px solid black;
  padding: 5px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const MenuItemLink = styled(InternalLink)`
  flex: 1;
  padding: 0px 15px;
  font-weight: 600;
`;

const ArrowButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  padding: 5px 15px;
  color: inherit;
`;

const Arrow = styled(FontAwesomeIcon)`
  color: inherit;
  font-size: 2em;
`;

const SubItems = styled.ul`
  display: ${props => (props.show ? 'block' : 'none')};
  width: 100%;
  list-style-type: none;
`;

const SubItem = styled.li`
  border-top: 1px solid black;
  padding: 2px 15px 2px 30px;
`;

const query = graphql`
  {
    left: file(
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

    right: file(
      sourceInstanceName: { eq: "shared-components" }
      relativePath: { eq: "right-nav.md" }
    ) {
      childMarkdownRemark {
        frontmatter {
          items {
            category
            path
          }
        }
      }
    }
  }
`;

const MenuItem = ({ expandable, category, path, subitems }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <MenuItemContainer>
      <MenuItemLink to={path}>{category}</MenuItemLink>
      {expandable && (
        <ArrowButton onClick={() => setIsExpanded(!isExpanded)}>
          <Arrow icon={isExpanded ? faAngleUp : faAngleDown} />
        </ArrowButton>
      )}
      {subitems && (
        <SubItems show={isExpanded}>
          {subitems.map(({ subitem, path }, i) => (
            <SubItem key={i} to={path}>
              {subitem}
            </SubItem>
          ))}
        </SubItems>
      )}
    </MenuItemContainer>
  );
};

const ResponsiveNav = ({ homeLogo, leftNavItems, rightNavItems, ...rest }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <Nav {...rest}>
      <LightMarble />
      <LogoAndText>
        {/* <Logo fluid={homeLogo.logo} alt='logo' /> */}
        <LogoText>{homeLogo.text}</LogoText>
      </LogoAndText>
      <SocialIcons />
      <TogglerContainer>
        <Toggler onClick={() => setIsExpanded(!isExpanded)}>
          <HamburgerIcon isExpanded={isExpanded} />
        </Toggler>
        <Menu show={isExpanded}>
          {leftNavItems.map((item, i) => (
            <MenuItem key={i} expandable {...item} />
          ))}
          {rightNavItems.map((item, i) => (
            <MenuItem key={i} {...item} />
          ))}
        </Menu>
      </TogglerContainer>
    </Nav>
  );
};

export default props => {
  const data = useStaticQuery(query);
  const left = data.left.childMarkdownRemark.frontmatter;
  const right = data.right.childMarkdownRemark.frontmatter;
  return (
    <ResponsiveNav
      {...left}
      {...right}
      leftNavItems={left.items}
      rightNavItems={right.items}
      homeLogo={{
        ...left.homeLogo,
        logo: left.homeLogo.logo.childImageSharp.fluid
      }}
      {...props}
    />
  );
};
