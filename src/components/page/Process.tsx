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
  background: lightgray;
`;
export default Process;
