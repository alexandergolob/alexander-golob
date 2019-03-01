import React from 'react';
import styled from 'styled-components';
import { Link as UnstyledLink, StaticQuery, graphql } from 'gatsby';

import FrameBox from './FrameBox';
import UnstyledSocialIcons from './SocialIcons';

const LogoImg = styled.img`
  height: 130px;
`;

const UnstyledSecondaryLogo = ({ src, ...rest }) => (
  <FrameBox {...rest}>
    <LogoImg src={src} alt='logo' />
  </FrameBox>
);

const SecondaryLogo = styled(UnstyledSecondaryLogo)`
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const UnstyledNavListItem = props => <FrameBox as='li' {...props} />;

const NavListItem = styled(UnstyledNavListItem)`
  padding: 10px;
  text-align: center;
  font-family: 'Enriqueta', serif;
  font-weight: 700;

  margin-bottom: 15px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const SocialIcons = styled(UnstyledSocialIcons)`
  display: flex;
  justify-content: space-around;
`;

const Contact = styled(NavListItem)`
  margin-top: 15px;
  padding: 20px 10px;

  background: url('./assets/contact-button-bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;

  color: hsl(148, 93%, 5%);
`;

const EmptyMarbleSquare = styled(FrameBox)`
  margin-top: 25px;
  background: url('./assets/empty-square-bg.png'), hsl(148, 93%, 5%);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  height: 120px;
`;

const Link = styled(UnstyledLink)`
  color: inherit;
  text-decoration: none;
`;

// export default ({ secondary_nav_logo, ...rest }) => (
//   <div {...rest}>
//     {/* <SecondaryLogo src={secondary_nav_logo} /> */}
//     <SecondaryLogo src={'./assets/logo.svg'} />
//     <nav>
//       <NavList>
//         <NavListItem>
//           <SocialIcons size='lg' />
//         </NavListItem>
//         <NavListItem>Portfolio</NavListItem>
//         <NavListItem>About</NavListItem>
//         <NavListItem>Press</NavListItem>
//         <Contact>Contact</Contact>
//       </NavList>
//     </nav>
//     <EmptyMarbleSquare />
//   </div>
// );

const RightNav = ({ data, ...rest }) => (
  <div {...rest}>
    <SecondaryLogo src={'./assets/logo.svg'} />
    <nav>
      <NavList>
        <NavListItem>
          <SocialIcons size='lg' />
        </NavListItem>
        {data.markdownRemark.frontmatter.items.map(({ category, path }) => (
          <NavListItem key={category}>
            <Link to={path}>{category}</Link>
          </NavListItem>
        ))}
        {/* <NavListItem>Portfolio</NavListItem>
        <NavListItem>About</NavListItem>
        <NavListItem>Press</NavListItem> */}
        <Contact>Contact</Contact>
      </NavList>
    </nav>
    <EmptyMarbleSquare />
  </div>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(frontmatter: { key: { eq: "right-nav" } }) {
          frontmatter {
            items {
              category
              path
            }
          }
        }
      }
    `}
    render={data => <RightNav data={data} {...props} />}
  />
);
