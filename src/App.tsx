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
import { colors } from 'styles/palette';

const App: React.FC = () => {
  return (
    <Wrapper>
      <NavMenu />
      <Button text="Apply" isPrimary />
      <Button text="Curriculum" />
      <Info title="About SoftUni">
        <Paragraph>
          SoftUni (Software University) is a worldwide respected and award winning educational IT
          institution, providing training and career support in the field of software engineering.
        </Paragraph>
        <Paragraph>
          Founded in 2013, SoftUni is rapidly becoming a market leader and today organizes hundreds of
          training programs, free courses and seminars, events and other educational initiatives that
          provide quality education to hundreds of thousands of people all over the world in the IT and
          Digital technologies.
        </Paragraph>
        <Paragraph>
          SoftUni not only provides training and educates people, but turns absolute beginners into real
          professionals, completely prepared to start their career in the field of IT. SoftUni is unique
          with its educational methodology of "learning by doing", achieving tremendous success rate of
          97% successfully hired graduates in the software industry.
        </Paragraph>
      </Info>
      <Process steps={processSteps} />
      <Info title="Live and interactive learning">
        <Paragraph>
          SoftUni (Software University) is based on the idea of an innovative and modern educational
          center that creates real professionals in the programming world. The programming courses, the
          team projects, the practical experience and the in-depth knowledge of the most demanding
          technologies make our students ready to start their career as successful software engineers.
        </Paragraph>
        <Paragraph>
          SoftUni (Software University) offers complete educational program suitable for beginners. The
          program starts with the free course Programming Basics and gives you the chance to get into the
          world of software development without the need of previous experience. By using modern
          technology and teaching methods, we can give you all necessary career skills for a period of 12
          to 20 months, depending on the profession you chose. After going through the Basic
          Programming module, you'll be able to choose your career path between one of four specially
          designed training tracks - .NET, Java, Python or JavaScript Web Development - the most in
          demand software technologies worldwide.
        </Paragraph>
        <Paragraph>
          All of the training sessions are held online via our virtual classroom with live online sessions,
          during
          which you are
          able to ask questions and receive guidance by our trainers. After each session you will have
          access to all
          training materials and videos. Each course ends up with practical exam, which aim to test your
          skills and certify
          you.
        </Paragraph>
        <Paragraph>
          We'll help you land your dream job even before you've graduated - in one of our partner companies or elsewhere.
        </Paragraph>
      </Info>
      <Testimonies testimonies={testimonies} />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: ${colors.white};
`;

export default App;
