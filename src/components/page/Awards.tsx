import React from 'react';
import styled from 'styled-components';

import CallToAction from 'components/shared/CallToAction';

const Awards: React.FC = () => (
  <>
    <h2>Award Winning Educational Institution</h2>
    <CallToActionContainer>
      <CallToAction
        title="Explore our Software Engineering Program"
        subtitle="Start with a free Programming Basics training, begin your career in the IT sector and graduate as a full stack developer!"
      />
    </CallToActionContainer>
  </>
);

const CallToActionContainer = styled.div`
  background: linear-gradient(rgba(62, 76, 93, 0.6), rgba(62, 76, 93, 0.6)), url('img/apply-prompt-background-desktop.jpg') no-repeat;
  background-size: cover;
`;

export default Awards;
