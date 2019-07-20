import React from 'react';
import styled from 'styled-components';

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

const AwardsWrapper = styled(MaxWidthContainer)`
  padding: 40px 0;
  text-align: center;
`;

const CallToActionContainer = styled(Panel)`
  background: linear-gradient(rgba(62, 76, 93, 0.6), rgba(62, 76, 93, 0.6)), url('img/apply-prompt-background-phone.jpg') no-repeat;
  background-size: cover;
`;

export default Awards;
