import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Hero } from './components/Hero';

const GlobalStyle = createGlobalStyle`
  font-family: 'Libre Baskerville', serif;
`;

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <Hero />
      </div>
    </>
  );
};
