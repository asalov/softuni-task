import React from 'react';
import styled from 'styled-components';

import ProcessStep from 'components/shared/ProcessStep';
import { MaxWidthContainer } from 'styles/layout';

interface Props {
  steps: any[];
}
const Process: React.FC<Props> = ({ steps }) => {
  const renderSteps = (): React.ReactElement[] => {
    return steps.map((step) => <ProcessStep {...step} />)
  };

  return (
    <Background>
      <MaxWidthContainer>
        {renderSteps()}
      </MaxWidthContainer>
    </Background>
  );
};

const Background = styled.div`
  background: linear-gradient(rgba(62, 76, 93, 0.7), rgba(62, 76, 93, 0.7)), url('img/curriculum-steps-background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`;
export default Process;
