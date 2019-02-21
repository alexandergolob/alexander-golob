import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    padding: 10px 20px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    /* justify-content: center; */
  }

  #___gatsby {
    width: 100%;

    & > div {
      width: 100%;
    }
  }
`;

const Background = styled.div`
  background: lightblue;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 80px;
  right: 80px;
  bottom: 0;
`;

export default ({ children, ...rest }) => (
  <div {...rest}>
    <GlobalStyle />
    <Background />

    {children}
  </div>
);

// meaningless comment
