/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
import styled, { css } from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) => (props.cta ? 'green' : 'blue')};
  border-radius: 30px;
  color: white;
  font-size: 30px;
  padding: 8px 16px;

  &:hover {
    background-color: red;
  }

  ${(props) =>
    props.outlined &&
    css`
      background-color: yellow;
      border: 2px solid black;
      color: black;
    `}
`;
