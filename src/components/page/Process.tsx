import React from 'react';
import styled from 'styled-components';

import ProcessStep from 'components/shared/ProcessStep';
import { MaxWidthContainer, Flex } from 'styles/layout';

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
        <ProcessFlex>
          {renderSteps()}
        </ProcessFlex>
      </MaxWidthContainer>
    </Background>
  );
};

const Background = styled.div`
  background: linear-gradient(rgba(62, 76, 93, 0.7), rgba(62, 76, 93, 0.7)), url('img/curriculum-steps-background.jpg') no-repeat;
  background-size: cover;
  padding: 40px 0;
`;

const ProcessFlex = styled(Flex)`
  flex-direction: column;
`;

export default Process;
