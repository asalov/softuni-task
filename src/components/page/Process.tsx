import React from 'react';
import styled from 'styled-components';

import ProcessStep from 'components/shared/ProcessStep';
import { MaxWidthContainer, Grid } from 'styles/layout';

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
        <ProcessGrid>
          {renderSteps()}
        </ProcessGrid>
      </MaxWidthContainer>
    </Background>
  );
};

const Background = styled.div`
  background: linear-gradient(rgba(62, 76, 93, 0.7), rgba(62, 76, 93, 0.7)), url('img/curriculum-steps-background.jpg') no-repeat;
  background-size: cover;
  padding: 40px 0;
`;

const ProcessGrid = styled(Grid)`
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-column-gap: 20px;
  grid-auto-rows: minmax(80px, auto);
  align-items: end;
`;

export default Process;
