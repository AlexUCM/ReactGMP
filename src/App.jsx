import React from 'react';
import { Routes } from './Routes';
import { Footer } from './components/Footer';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', 'sans-serif';
}

html,
body {
  height: 100%;
}

body > div:nth-of-type(1) {
  height: 100%;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`;

const StyledContainer = styled.div`
  position: relative;
  min-height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledContainer>
        <Routes />
        <Footer />
      </StyledContainer>
    </>
  );
};

export default App;
