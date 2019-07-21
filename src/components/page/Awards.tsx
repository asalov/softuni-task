import React from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import CallToAction from 'components/shared/CallToAction';
import { MaxWidthContainer, Panel } from 'styles/layout';
import { Title } from 'styles/content';

const Awards: React.FC = () => (
  <AwardsWrapper>
    <Title>Award Winning Educational Institution</Title>
    <CallToActionContainer>
      <CallToAction
        title="Explore our Software Engineering Program"
        subtitle="Start with a free Programming Basics training, begin your career in the IT sector and graduate as a full stack developer!"
      />
    </CallToActionContainer>
  </AwardsWrapper>
);

const setBackground = (image: string): string => {
  return `
    background: linear-gradient(rgba(62, 76, 93, 0.6), rgba(62, 76, 93, 0.6)),
    url('img/apply-prompt-background-${image}.jpg') no-repeat;
    background-size: cover;
  `;
}

const AwardsWrapper = styled(MaxWidthContainer)`
  padding: 40px 20px;
  text-align: center;
`;

const CallToActionContainer = styled(Panel)`
  ${setBackground('phone')}

  ${up('tablet')} {
      ${setBackground('desktop')}
  }
`;

export default Awards;
