import React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/palette';

interface Props {
  icon: string;
  title: string;
  subtitle: string;
}

const Stat: React.FC<Props> = ({ icon, title, subtitle }) => (
  <StatWrapper>
    <i>{icon}</i>
    <StatTitle>{title}</StatTitle>
    <p>{subtitle}</p>
  </StatWrapper>
);

const StatWrapper = styled.div`
  color: ${colors.primary};
`;

const StatTitle = styled.p`
  font-weight: bold;
`;

export default Stat;
