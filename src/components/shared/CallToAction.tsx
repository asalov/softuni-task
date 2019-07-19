import React from 'react';
import styled from 'styled-components';

import Button from 'components/shared/Button';
import { colors } from 'styles/palette';

interface Props {
  title: string;
  subtitle: string;
};

const CallToAction: React.FC<Props> = ({ title, subtitle }) => (
  <Container>
    <h2>{title}</h2>
    <p>{subtitle}</p>
    <Button text="Apply" isPrimary />
    <Button text="Curriculum" />
  </Container>
);

const Container = styled.div`
  color: ${colors.white};
`;

export default CallToAction;
