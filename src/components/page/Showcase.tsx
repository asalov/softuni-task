import React from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import stats from 'data/stats';

import NavMenu from 'components/page/NavMenu';
import CallToAction from 'components/shared/CallToAction';
import OverlayPanel from 'components/shared/OverlayPanel';
import Stat from 'components/shared/Stat';

import { MaxWidthContainer, Flex, Panel, flexCenter } from 'styles/layout';
import { colors } from 'styles/palette';
import variables from 'styles/variables';

const Showcase: React.FC = () => {
  const renderStats = (): React.ReactElement[] => {
    return stats.map((stat) => <Stat key={stat.icon} {...stat} />);
  };

  return (
    <ShowcaseContainer>
      <MaxWidthContainer>
        <NavMenu />
        <ShowcaseFlex>
          <CallToActionWrapper>
            <CallToAction
              title={`Become a Software Developer\n Learn to code and start your career`}
              subtitle="Enroll in our end-to-end program. Start now with a free course"
            />
          </CallToActionWrapper>
          <VideoWrapper>
            <VideoThumbnail>
              <PlayButton>
                <PlayArrow />
              </PlayButton>
            </VideoThumbnail>
            <VideoTitle>Learn about programming</VideoTitle>
          </VideoWrapper>
            <OverlayPanel>
              <StatWrapper>
                {renderStats()}
              </StatWrapper>
            </OverlayPanel>
        </ShowcaseFlex>
      </MaxWidthContainer>
    </ShowcaseContainer>
  );
};

const ShowcaseContainer = styled.div`
  background: url('img/home-page-hero.jpg') no-repeat;
  background-size: cover;
`;

const ShowcaseFlex = styled(Flex)`
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 80px 15px 100px;

  ${up('tablet')} {
    flex-direction: row;
    justify-content: space-around;
    padding: 140px 30px 100px;
  }
`;

const CallToActionWrapper = styled.div`
  text-align: center;

  ${up('tablet')} {
    text-align: left;
  }
`;

const VideoWrapper = styled(Panel)`
  overflow: hidden;
  width: 480px;
  max-width: 100%;
`;

const VideoThumbnail = styled.div`
  background: url('img/video-thumbnail.jpg') no-repeat;
  background-size: cover;
  background-position: 50%;
  height: 270px;
  ${flexCenter}
`;

const PlayButton = styled.div`
  background: ${colors.primary};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  box-shadow: ${variables.boxShadow};
  cursor: pointer;
  ${flexCenter}
`;

const PlayArrow = styled.div`
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 25px solid ${colors.white};
  margin-left: 5px;
`;

const VideoTitle = styled.div`
  background: ${colors.white};
  text-transform: uppercase;
  padding: 17px 10px;
  font-size: 1.4rem;
  font-weight: bold;
`;

const StatWrapper = styled.div`
  padding: 0 30px;
  height: 100%;
  ${flexCenter};

  ${up('tablet')} {
    justify-content: space-between;
  }
`;

export default Showcase;
