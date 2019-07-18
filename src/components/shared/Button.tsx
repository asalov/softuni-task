import React from 'react';
import styled from 'styled-components';

import { colors } from 'styles/palette';

interface Props {
  text: string;
  isPrimary?: boolean;
};

const Button: React.FC<Props> = ({ text, isPrimary }) => (
  <StyledButton isPrimary={isPrimary}>{text}</StyledButton>
);

const StyledButton = styled.button<{ isPrimary?: boolean }>`
  border-radius: 5px;
  text-transform: uppercase;
  padding: 10px 20px;
  border: 1px solid ${colors.white};
  background: ${p => p.isPrimary ? colors.white : 'transparent'};
  color: ${p => p.isPrimary ? colors.primary : colors.white};
`;

export default Button;
