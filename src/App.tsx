import React from 'react';
import styled from 'styled-components';

import processSteps from 'data/processSteps';
import testimonies from 'data/testimonies';

import NavMenu from 'components/page/NavMenu';
import Process from 'components/page/Process';
import Testimonies from 'components/page/Testimonies';
import Footer from 'components/page/Footer';

import Info from 'components/shared/Info';
import Button from 'components/shared/Button';
import { Paragraph } from 'styles/content';

const App: React.FC = () => {
  return (
    <Wrapper>
      <NavMenu />
      <Button text="Apply" isPrimary />
      <Button text="Curriculum" />
      <Info title="About SoftUni">
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores saepe tenetur cumque ullam eos deserunt facere voluptatem quisquam nihil dolorem vel tempore veniam, facilis minus iure fugit et ab autem?</Paragraph>
        <Paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nam eligendi? Adipisci praesentium omnis cum, nemo vitae fuga unde deserunt corrupti quas, quo est nam odit tempore explicabo quaerat ducimus.</Paragraph>
        <Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non tempora, maiores error iure, reiciendis minima harum possimus recusandae excepturi ratione praesentium eligendi aspernatur enim corporis cupiditate quis. Veritatis, consequatur non?</Paragraph>
      </Info>
      <Process steps={processSteps} />
      <Info title="Live and interactive learning">
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores saepe tenetur cumque ullam eos deserunt facere voluptatem quisquam nihil dolorem vel tempore veniam, facilis minus iure fugit et ab autem?</Paragraph>
        <Paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nam eligendi? Adipisci praesentium omnis cum, nemo vitae fuga unde deserunt corrupti quas, quo est nam odit tempore explicabo quaerat ducimus.</Paragraph>
        <Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non tempora, maiores error iure, reiciendis minima harum possimus recusandae excepturi ratione praesentium eligendi aspernatur enim corporis cupiditate quis. Veritatis, consequatur non?</Paragraph>
        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolore aliquam velit est sit impedit, officia asperiores, ea magni, ab optio? Reprehenderit saepe hic nostrum assumenda itaque quia quaerat culpa.</Paragraph>
      </Info>
      <Testimonies testimonies={testimonies} />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #fff;
`;

export default App;
