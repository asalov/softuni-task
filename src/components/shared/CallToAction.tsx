import React from 'react';
import styled from 'styled-components';

import Button from 'components/shared/Button';
import { flexCenter } from 'styles/layout';
import { Title, Paragraph } from 'styles/content';
import { colors } from 'styles/palette';

interface Props {
  title: string;
  subtitle: string;
};

const CallToAction: React.FC<Props> = ({ title, subtitle }) => (
  <Container>
    <Title>{title}</Title>
    <Paragraph>{subtitle}</Paragraph>
    <ButtonContainer>
      <Button text="Apply" isPrimary />
      <Separator>|</Separator>
      <Button text="Curriculum" />
    </ButtonContainer>
  </Container>
);

const Container = styled.div`
  color: ${colors.white};
  text-align: center;
  padding: 30px 0;
`;

const ButtonContainer = styled.div`
  ${flexCenter}
`;

const Separator = styled.span`
  margin: 0 20px;
  font-size: 2rem;
  line-height: 1.8;
`;

export default CallToAction;
