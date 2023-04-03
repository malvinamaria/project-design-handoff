import React from 'react';
import { ButtonCss } from './components/ButtonCss';
import { Button } from './components/Button';

export const App = () => {
  return (
    <div className="app">
      <ButtonCss />
      <Button cta>ORDERnumber1</Button>
      <Button outlined>ORDERnumber2</Button>
    </div>
  );
};
