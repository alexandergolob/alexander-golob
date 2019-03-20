import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import UnstyledSocialIcons from './SocialIcons';

const Container = styled.footer`
  padding: 20px 30px 7px;
  background-image: url('/assets/light-marble.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-top: 2px solid #000;

  display: grid;
  grid-template-columns: 1fr 35% 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    'SupportUs Logo SocialIconsContainer'
    'DevCredit Logo SocialIconsContainer'
    'Copyright Copyright Copyright';

  font-family: 'Enriqueta', serif;
`;

const SupportUs = styled.div`
  grid-area: SupportUs;
  font-weight: 700;
  align-self: end;
  margin-bottom: 5px;
`;

const DevCredit = styled.div`
  grid-area: DevCredit;
`;

const Logo = styled.div`
  grid-area: Logo;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 2.5rem;
`;

const LogoImg = styled.img`
  display: block;
  height: 4.5rem;
`;

const SocialIcons = styled(UnstyledSocialIcons)`
  grid-area: SocialIconsContainer;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > * {
    margin-right: 0.8rem;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const Copyright = styled.div`
  grid-area: Copyright;
  text-align: center;
  font-family: sans-serif;
  font-size: 0.85rem;
`;

const Footer = ({ bold_left_statement, middle_statement, ...rest }) => (
  <Container {...rest}>
    <SupportUs>{bold_left_statement}</SupportUs>
    <DevCredit>website created by kbaig</DevCredit>
    <Logo>
      <LogoImg src={middle_statement.img} alt='' />
      {middle_statement.text}
    </Logo>
    <SocialIcons size='2x' />
    <Copyright>&copy; {new Date().getFullYear()}</Copyright>
  </Container>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(frontmatter: { key: { eq: "footer" } }) {
          frontmatter {
            bold_left_statement
            middle_statement {
              img
              text
            }
          }
        }
      }
    `}
    render={data => <Footer {...data.markdownRemark.frontmatter} {...props} />}
  />
);
