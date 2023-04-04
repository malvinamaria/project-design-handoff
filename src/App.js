/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { SearchBar } from 'components/SearchBar';
import { ButtonCss } from './components/ButtonCss';
import { Button } from './components/Button';

export const App = () => {
  return (
    <div className="app">
      <ButtonCss />
      <Button cta>ORDERnumber1</Button>
      <Button outlined>ORDERnumber2</Button>
      <SearchBar
        type="text"
        required
        minlength="4"
        maxlength="11"
        placeholder="type something..."
      />
      <SearchBar />
    </div>
  );
};
