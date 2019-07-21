import React from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { darken, borderRadius } from 'polished';

import { IStep } from 'models';
import { Flex } from 'styles/layout';
import { colors } from 'styles/palette';
import variables from 'styles/variables';

const ProcessStep: React.FC<IStep> = ({ number, title, color, description, additionalInfo }) => (
  <StepContainer number={number}>
    <Title>{title}</Title>
    <Description bgColor={color} hasAdditionalInfo={!!additionalInfo}>{description}</Description>
    {additionalInfo && <AdditionalInfo bgColor={color}>{additionalInfo}</AdditionalInfo>}
  </StepContainer>
);

const stepNumSize = 30;

const StepContainer = styled(Flex)<{ number: number }>`
  position: relative;
  text-align: center;
  margin: 25px 0;
  flex-direction: column;
  padding: 0 10px;

  ${up('tablet')} {
    max-width: 180px;
  }

  &:before {
    content: ${p => `"${p.number}"`};
    color: ${colors.white};
    background: ${colors.primary};
    border-radius: 50%;
    position: absolute;
    font-size: 1.2rem;
    font-weight: bold;
    ${`
      top: -${stepNumSize / 2}px;
      left: calc(50% - ${stepNumSize / 2}px);
      width: ${stepNumSize}px;
      height: ${stepNumSize}px;
      line-height: ${stepNumSize}px;
    `}

    ${up('tablet')} {
      top: -40px;
    }
  }
`;

const Title = styled.h3`
  font-size: 1.4rem;
  border-top-left-radius:5px;
  border-top-right-radius:5px;
  margin: 0;
  text-transform: uppercase;
  background: ${colors.white};
  padding: 20px 10px;
  min-height: 70px;
`;

const Description = styled.p<{ bgColor: string, hasAdditionalInfo?: boolean }>`
  ${p => !p.hasAdditionalInfo && borderRadius('bottom', variables.borderRadius)}
  margin: 0;
  color: ${colors.white};
  background: ${p => p.bgColor};
  padding: 10px;
  flex: 1;
  font-size: 1.6rem;
  line-height: 1.5;
  white-space: pre-line;
`;

const AdditionalInfo = styled(Description)`
  border-top: 1px solid ${colors.white};
  background: ${p => darken(0.1, p.bgColor)};
`;

export default ProcessStep;
