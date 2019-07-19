import React from 'react';
import styled from 'styled-components';

import Info from 'components/shared/Info';
import { Paragraph } from 'styles/content';
import { colors } from 'styles/palette';

const About: React.FC = () => (
  <AboutWrapper>
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
    <Stat>
      <StatTitle>97% of our graduates start a career in IT</StatTitle>
    </Stat>
  </AboutWrapper>
);

const AboutWrapper = styled.div`
  padding: 40px 0;
`;

const Stat = styled.div`
  width: 300px;
  height: 300px;
  background: url('img/stats-card-background.jpg') no-repeat;
  background-size: cover;
  text-align: center;
`;

const StatTitle = styled.p`
  color: ${colors.white};
`;

export default About;
