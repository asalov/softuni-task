import React from 'react';
import styled from 'styled-components';

import Button from 'components/shared/Button';
import { Title, Paragraph } from 'styles/content';
import { colors } from 'styles/palette';

interface Props {
  title: string;
  subtitle: string;
};

const CallToAction: React.FC<Props> = ({ title, subtitle }) => (
  <Container>
    <CallToActionTitle>{title}</CallToActionTitle>
    <Paragraph>{subtitle}</Paragraph>
    <div>
      <Button text="Apply" isPrimary />
      <Separator>|</Separator>
      <Button text="Curriculum" />
    </div>
  </Container>
);

const Container = styled.div`
  color: ${colors.white};
  padding: 30px 0;
`;

const CallToActionTitle = styled(Title)`
  white-space: pre-line;
  margin-top: 0;
`;

const Separator = styled.span`
  margin: 0 25px;
  font-size: 2rem;
  line-height: 1.8;
`;

export default CallToAction;
