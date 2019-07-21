import React from 'react';
import styled from 'styled-components';

import { Flex } from 'styles/layout';
import { colors } from 'styles/palette';
import { defaultFont } from 'styles/content';

interface Props {
  icon: string;
  title: string;
  subtitle: string;
}

const Stat: React.FC<Props> = ({ icon, title, subtitle }) => (
  <StatWrapper>
    <Icon className={icon} />
    <div>
      <StatTitle>{title}</StatTitle>
      <Subtitle>{subtitle}</Subtitle>
    </div>
  </StatWrapper>
);

const StatWrapper = styled(Flex)`
  color: ${colors.primary};
  padding: 10px 0;
`;

const Icon = styled.i`
  font-size: 2.6rem;
  padding-right: 15px;
  display: flex;
  align-items: center;
`;

const StatTitle = styled.h4`
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
`;

const Subtitle = styled.p`
  ${defaultFont}
  margin: 0;
`;

export default Stat;
