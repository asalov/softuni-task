import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

import { colors } from 'styles/palette';

interface Props {
  number: number;
  title: string;
  color: string;
  description: string;
  additionalInfo?: string | null;
};

const ProcessStep: React.FC<Props> = ({ number, title, color, description, additionalInfo }) => (
  <StepContainer number={number}>
    <Title>{title}</Title>
    <Description bgColor={color} hasAdditionalInfo={!!additionalInfo}>{description}</Description>
    {additionalInfo && <AdditionalInfo bgColor={color}>{additionalInfo}</AdditionalInfo>}
  </StepContainer>
);

const StepContainer = styled.div<{ number: number }>`
  position: relative;
  text-align: center;
  margin: 10px 0;

  &:before {
    content: ${p => `"${p.number}"`};
    color: ${colors.white};
    background: ${colors.primary};
    border-radius: 50%;
    position: absolute;
    top: -20px;
    left: calc(50% - 20px);
    width: 20px;
    height: 20px;
    padding: 10px;
  }
`;

const Title = styled.h3`
  font-size: 1.4rem;
  border-top-left-radius:5px;
  border-top-right-radius:5px;
  margin: 0;
  text-transform: uppercase;
  background: ${colors.white};
  padding: 20px 0;
`;

const Description = styled.p<{ bgColor: string, hasAdditionalInfo?: boolean }>`
  ${p => !p.hasAdditionalInfo && `
    border-bottom-left-radius:5px;
    border-bottom-right-radius:5px;
  `}
  margin: 0;
  color: ${colors.white};
  background: ${p => p.bgColor};
  padding: 10px 0;
`;

const AdditionalInfo = styled(Description)`
  border-top: 1px solid ${colors.white};
  background: ${p => darken(0.1, p.bgColor)};
`;

export default ProcessStep;
