import React from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import Info from 'components/shared/Info';
import OverlayPanel from 'components/shared/OverlayPanel';
import { Paragraph } from 'styles/content';
import { MaxWidthContainer, Flex } from 'styles/layout';

const Learning: React.FC = () => (
  <LearningWrapper>
    <Info title="Live and Interactive Learning">
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
    <OverlayPanel>
      <CompaniesWrapper>
        <CompaniesTitle>Start your career in:</CompaniesTitle>
      </CompaniesWrapper>
    </OverlayPanel>
  </LearningWrapper>
);

const LearningWrapper = styled(MaxWidthContainer)`
  padding: 30px 20px 80px;
  position: relative;
`;

const CompaniesWrapper = styled(Flex)`
  height: 100%;
  padding: 15px;
  flex-direction: column;

  ${up('tablet')} {
    flex-direction: row;
    align-items: center;
  }
`;

const CompaniesTitle = styled.h3`
  font-size: 2rem;
  line-height: 1.5;
  font-weight: normal;
  margin: 0;
`;

export default Learning;
