import React from 'react';

export default () => <div>right nav</div>;
// import styled from 'styled-components';
// import { StaticQuery, graphql } from 'gatsby';

// import FrameBox from './FrameBox';
// import UnstyledSocialIcons from './SocialIcons';
// import Link from './Link';

// const LogoImg = styled.img`
//   height: 8rem;
//   display: block;
// `;

// const UnstyledSecondaryLogo = ({ src, ...rest }) => (
//   <FrameBox {...rest}>
//     <LogoImg src={src} alt='logo' />
//   </FrameBox>
// );

// const SecondaryLogo = styled(UnstyledSecondaryLogo)`
//   margin-bottom: 25px;
//   padding: 0.8rem 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const NavList = styled.ul`
//   display: flex;
//   flex-direction: column;
//   list-style-type: none;
// `;

// const NavListItemLink = styled(Link)`
//   margin-bottom: 15px;
//   &:last-of-type {
//     margin-bottom: 0;
//   }
// `;

// const UnstyledNavListItem = props => <FrameBox as='li' {...props} />;

// const NavListItem = styled(UnstyledNavListItem)`
//   padding: 10px;
//   text-align: center;
//   font-family: 'Enriqueta', serif;
//   font-weight: 700;
// `;

// const SocialIcons = styled(UnstyledSocialIcons)`
//   display: flex;
//   justify-content: space-around;
// `;

// const SocialIconsBox = styled(NavListItem)`
//   margin-bottom: 15px;
// `;

// const ContactLink = styled(NavListItemLink)`
//   margin-top: 15px;
// `;

// const ContactItem = styled(NavListItem)`
//   padding: 1.25rem 0;
//   background: url('/assets/contact-button-bg.png'), hsl(0, 0%, 93%);
//   background-repeat: no-repeat;
//   background-size: 100% 100%;
//   background-position: center center;
//   color: hsl(148, 93%, 5%);
// `;

// const EmptyMarbleSquare = styled(FrameBox)`
//   margin-top: 25px;
//   background: url('/assets/empty-square-bg.png'), hsl(148, 93%, 5%);
//   background-repeat: no-repeat;
//   background-size: 100% 100%;
//   background-position: center center;
//   height: 7.5rem;
// `;

// const RightNav = ({ items, ...rest }) => (
//   <div {...rest}>
//     <SecondaryLogo src={'/assets/secondary-logo.svg'} />
//     <nav>
//       <NavList>
//         <SocialIconsBox>
//           <SocialIcons size='lg' />
//         </SocialIconsBox>
//         {items.map(({ category, path }, i) => (
//           <NavListItemLink key={i} to={path}>
//             <NavListItem>{category}</NavListItem>
//           </NavListItemLink>
//         ))}
//         <ContactLink to='/contact'>
//           <ContactItem>Contact</ContactItem>
//         </ContactLink>
//       </NavList>
//     </nav>
//     <EmptyMarbleSquare />
//   </div>
// );

// export default props => (
//   <StaticQuery
//     query={graphql`
//       query {
//         markdownRemark(frontmatter: { key: { eq: "right-nav" } }) {
//           frontmatter {
//             items {
//               category
//               path
//             }
//           }
//         }
//       }
//     `}
//     render={data => (
//       <RightNav items={data.markdownRemark.frontmatter.items} {...props} />
//     )}
//   />
// );
