import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { useStaticQuery, graphql } from 'gatsby';

const Container = styled.div``;

const UnstyledSocialIcon = ({ hoverColor, ...rest }) => (
  <FontAwesomeIcon {...rest} />
);

const SocialIcon = styled(UnstyledSocialIcon)`
  ${Container}:hover &:not(:hover) {
    opacity: 0.75;
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

const SocialLinks = ({ className, links, ...rest }) => (
  <Container className={className}>
    {links.map(({ icon, link }, i) => (
      <SocialLink key={i} href={link} icon={getIcon(icon)} {...rest} />
    ))}
  </Container>
);

const query = graphql`
  {
    file(
      sourceInstanceName: { eq: "shared-components" }
      relativePath: { eq: "social-links.md" }
    ) {
      childMarkdownRemark {
        frontmatter {
          links {
            icon
            link
          }
        }
      }
    }
  }
`;

export default props => {
  const data = useStaticQuery(query);
  const { frontmatter } = data.file.childMarkdownRemark;

  return <SocialLinks {...frontmatter} {...props} />;
};
