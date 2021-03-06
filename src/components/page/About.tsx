import React from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import Info from 'components/shared/Info';
import { MaxWidthContainer, Flex, Panel, flexCenter } from 'styles/layout';
import { Paragraph } from 'styles/content';
import { colors } from 'styles/palette';

const About: React.FC = () => (
  <AboutWrapper>
    <AboutFlex>
      <InfoWrapper>
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
      </InfoWrapper>
      <StatOuter>
        <StatInner>
          <StatCircle>
            <StatCircleHeading>97 %</StatCircleHeading>
            <StatCircleText>Success rate</StatCircleText>
          </StatCircle>
          <StatTitle>97% of our graduates start a career in IT</StatTitle>
        </StatInner>
      </StatOuter>
    </AboutFlex>
  </AboutWrapper>
);

const AboutWrapper = styled(MaxWidthContainer)`
  padding: 60px 20px;

  ${up('tablet')} {
    padding: 80px 30px;
  }
`;

const AboutFlex = styled(Flex)`
  flex-direction: column;

  ${up('tablet')} {
    flex-direction: row;
  }
`;

const InfoWrapper = styled.div`
  flex: 2;

  ${up('tablet')} {
    margin-right: 20px;
  }
`;

const StatOuter = styled(Panel)`
  background: url('img/stats-card-background.jpg') no-repeat;
  background-size: cover;
  ${flexCenter}
  padding: 30px 10px;
  flex: 1;
  margin: 20px 0;
`;

const StatInner = styled(Flex)`
  flex-direction: column;
  align-items: center;
`;

const StatCircle = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: ${colors.white};
  ${flexCenter}
  flex-direction: column;
  position: relative;

  &:before, &:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    border: 2px solid #000;
    width: 100%;
    height: 100%;
    border-top-color: transparent;
  }

  &:before {
    transform: rotate(15deg);
  }

  &:after {
    transform: rotate(-50deg);
  }
`;

const StatCircleHeading = styled.h4`
  font-size: 4.2rem;
  margin: 0;
`;

const StatCircleText = styled.p`
  font-size: 1.8rem;
  margin: 0;
`;

const StatTitle = styled.p`
  color: ${colors.white};
  font-size: 1.6rem;
  line-height: 1.5;
  padding: 0 15px;
  text-align: center;
`;

export default About;
