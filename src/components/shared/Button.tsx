import React from 'react';
import styled from 'styled-components';

import { defaultFont } from 'styles/content';
import { colors } from 'styles/palette';
import variables from 'styles/variables';

interface Props {
  text: string;
  isPrimary?: boolean;
};

const Button: React.FC<Props> = ({ text, isPrimary }) => (
  <StyledButton isPrimary={isPrimary}>{text}</StyledButton>
);

const StyledButton = styled.button<{ isPrimary?: boolean }>`
  border-radius: ${variables.borderRadius};
  text-transform: uppercase;
  padding: 8px 25px;
  border: 1px solid ${colors.white};
  background: ${p => p.isPrimary ? colors.white : 'transparent'};
  color: ${p => p.isPrimary ? colors.primary : colors.white};
  cursor: pointer;
  ${defaultFont}
`;

export default Button;
