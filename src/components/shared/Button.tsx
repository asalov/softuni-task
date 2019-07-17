import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
  isPrimary?: boolean;
};

const Button: React.FC<Props> = (props) => (
  <StyledButton {...props}>{props.text}</StyledButton>
);

const StyledButton = styled.button<Props>`
  border-radius: 5px;
  text-transform: uppercase;
  padding: 10px 20px;
  border: 1px solid #fff;
  background: ${p => p.isPrimary ? '#fff' : 'transparent'};
  color: ${p => p.isPrimary ? 'cornflowerblue' : '#fff'};
`;

export default Button;
