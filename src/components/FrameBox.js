import React from 'react';
import styled from 'styled-components';

// const borderWidth = 1;

const Container = styled.div`
  display: inline-block;
  border: 1px solid #000;
  position: relative;
  background: hsl(0, 0%, 93%);
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const BorderContainer = styled.div`
  position: absolute;
  top: -3px;
  right: -3px;
  bottom: -3px;
  left: -3px;
  z-index: 1;
`;

const Border = styled.div`
  position: absolute;
`;

const TopAndLeftBorder = styled(Border)`
  z-index: 2;
  background: hsl(0, 0%, 68%);
  border-top: 1px solid #000;
`;

const TopBorder = styled(TopAndLeftBorder)`
  top: 0;
  left: 0;
  height: 2px;
  width: 100%;
  border-right: 1px solid #000;
`;

const LeftBorder = styled(TopAndLeftBorder)`
  top: 0;
  left: 0;
  height: 100%;
  width: 2px;
  border-left: 1px solid #000;
  border-bottom: 1px solid #000;
`;

const RightAndBottomBorder = styled(Border)`
  z-index: 1;
  background: hsl(0, 0%, 21%);
  border-right: 1px solid #000;
`;

const RightBorder = styled(RightAndBottomBorder)`
  top: 0;
  right: 0;
  height: 100%;
  width: 2px;
`;

const BottomBorder = styled(RightAndBottomBorder)`
  bottom: 0;
  right: 0;
  height: 2px;
  width: 100%;
  border-bottom: 1px solid #000;
`;

const Separator = styled.div`
  position: absolute;
  z-index: 3;
  background: #000;
  height: 2px;
  width: 3px;
`;

const TopRightSeparator = styled(Separator)`
  top: 2px;
  right: 0px;
  transform-origin: 0%;
  transform: rotate(-45deg);
`;

const BottomLeftSeparator = styled(Separator)`
  bottom: 2px;
  left: 0px;
  transform-origin: 100%;
  transform: rotate(-45deg);
`;

export default ({ children, ...rest }) => (
  <Container {...rest}>
    <BorderContainer>
      <TopBorder />
      <LeftBorder />
      <RightBorder />
      <BottomBorder />
      <TopRightSeparator />
      <BottomLeftSeparator />
    </BorderContainer>
    <ContentContainer>{children}</ContentContainer>
  </Container>
);
