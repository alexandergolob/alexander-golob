import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

import { media } from './ThemeProvider';

const Container = styled.div`
  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  padding: 15px;
  font-family: ${props => props.theme.fonts.serif};

  ${media.tablet`padding: 10px 15px;`}
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Heading = styled.h3`
  font-weight: 700;
  font-size: 1.15em;

  ${media.tablet`font-size: 1em;`}
`;

const ExpandButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  padding: 5px;
  font-size: 0.8em;
`;

const ExpandIcon = styled(FontAwesomeIcon).attrs({
  size: 'lg'
})``;

const Content = styled.div.attrs(({ expanded, maxHeight }) => ({
  style: { maxHeight: `${expanded ? maxHeight : 0}px` }
}))`
  *:last-of-type {
    margin-bottom: 0;
  }
  p {
    margin: 0.5em 0;
  }

  overflow: hidden;
  transition: all 300ms ease-in-out;
`;

export default ({ heading, content, ...rest }) => {
  const [expanded, setExpanded] = React.useState(true);
  const contentRef = React.useRef();

  return (
    <Container {...rest}>
      <HeadingContainer>
        <Heading>{heading}</Heading>
        <ExpandButton
          role={expanded ? 'collapse content' : 'expand content'}
          onClick={() => setExpanded(!expanded)}
        >
          <ExpandIcon icon={expanded ? faTimes : faPlus} />
        </ExpandButton>
      </HeadingContainer>

      <Content
        ref={contentRef}
        expanded={expanded}
        maxHeight={contentRef.current && contentRef.current.scrollHeight}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Container>
  );
};
