import React from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import { IStep } from 'models';
import ProcessStep from 'components/shared/ProcessStep';
import { MaxWidthContainer, Flex } from 'styles/layout';

interface Props {
  steps: IStep[];
};

const Process: React.FC<Props> = ({ steps }) => {
  const renderSteps = (): React.ReactElement[] => {
    return steps.map((step: IStep) => <ProcessStep key={step.number} {...step} />)
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
  padding: 60px 0 40px;
`;

const ProcessFlex = styled(Flex)`
  flex-direction: column;

  ${up('tablet')} {
    flex-direction: row;
    justify-content: center;
  }
`;

export default Process;
