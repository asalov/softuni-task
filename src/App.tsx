import React from 'react';
import styled from 'styled-components';

import processSteps from 'data/processSteps';
import testimonies from 'data/testimonies';

import Showcase from 'components/page/Showcase';
import About from 'components/page/About';
import Process from 'components/page/Process';
import Learning from 'components/page/Learning';
import Testimonies from 'components/page/Testimonies';
import Awards from 'components/page/Awards';
import Footer from 'components/page/Footer';

import { colors } from 'styles/palette';

const App: React.FC = () => {
  return (
    <Wrapper>
      <Showcase />
      <About />
      <Process steps={processSteps} />
      <Learning />
      <Testimonies testimonies={testimonies} />
      <Awards />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: ${colors.white};
  overflow-x: hidden;
`;

export default App;
