import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { StaticQuery, graphql } from 'gatsby';

const Container = styled.div``;

const UnstyledSocialIcon = ({ hoverColor, ...rest }) => (
  <FontAwesomeIcon {...rest} />
);

const SocialIcon = styled(UnstyledSocialIcon)`
  ${Container}:hover &:not(:hover) {
    opacity: 0.75;
  }

  &:hover {
    color: ${({ hoverColor }) => hoverColor};
  }

  transition: all 300ms ease-in-out;
`;

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
`;

const SocialLink = ({ href, ...rest }) => (
  <Anchor href={href} target='_blank' rel='noopener noreferrer'>
    <SocialIcon {...rest} />
  </Anchor>
);

const getIcon = social =>
  ({
    Facebook: faFacebookF,
    Instagram: faInstagram,
    LinkedIn: faLinkedinIn,
    Twitter: faTwitter
  }[social]);

const getHoverColor = social =>
  ({
    Facebook: 'hsl(221, 44%, 41%)',
    Instagram: 'hsl(326, 57%, 48%)',
    LinkedIn: 'hsl(201, 100%, 35%)',
    Twitter: 'hsl(196, 100%, 46%)'
  }[social]);

const SocialLinks = ({ className, links, ...rest }) => {
  return (
    <Container className={className}>
      {links.map(({ icon, link }, i) => (
        <SocialLink
          key={i}
          href={link}
          icon={getIcon(icon)}
          hoverColor={getHoverColor(icon)}
          {...rest}
        />
      ))}
    </Container>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(frontmatter: { key: { eq: "social-links" } }) {
          frontmatter {
            links {
              icon
              link
            }
          }
        }
      }
    `}
    render={data => (
      <SocialLinks links={data.markdownRemark.frontmatter.links} {...props} />
    )}
  />
);
