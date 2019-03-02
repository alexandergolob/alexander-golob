import React from 'react';
import styled from 'styled-components';

const ProjectCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: hsl(0, 0%, 93%);
  padding: 5px 10px;
  text-align: center;
`;

const UnstyledProject = props => (
  <div {...props}>
    <ProjectCaption>Kaleidoscope</ProjectCaption>
  </div>
);

export default styled(UnstyledProject)`
  background: darkgreen;
  position: relative;
`;
