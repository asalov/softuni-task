import React from 'react';
import styled from 'styled-components';

import stats from 'data/stats';

import NavMenu from 'components/page/NavMenu';
import CallToAction from 'components/shared/CallToAction';
import OverlayPanel from 'components/shared/OverlayPanel';
import Stat from 'components/shared/Stat';

import { MaxWidthContainer, Grid, Panel, flexCenter } from 'styles/layout';
import { colors } from 'styles/palette';
import variables from 'styles/variables';

const Showcase: React.FC = () => {
  const renderStats = (): React.ReactElement[] => {
    return stats.map((stat) => <Stat {...stat} />);
  };

  return (
    <ShowcaseContainer>
      <ContentWrapper>
        <NavMenu />
        <ShowcaseGrid>
          <CallToActionWrapper>
            <CallToAction
              title="Become a Software Developer Learn to code and start your career"
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
        </ShowcaseGrid>
        <OverlayPanel>
          {renderStats()}
        </OverlayPanel>
      </ContentWrapper>
    </ShowcaseContainer>
  );
};

const ShowcaseContainer = styled.div`
  background: url('img/home-page-hero.jpg') no-repeat;
  background-size: cover;
  padding-top: 70px;
`;

const ContentWrapper = styled(MaxWidthContainer)`
  position: relative;
`;

const ShowcaseGrid = styled(Grid)`
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  justify-items: center;
  align-items: center;
  padding: 50px 0 80px;
`;

const CallToActionWrapper = styled.div`
`;

const VideoWrapper = styled(Panel)`
  overflow: hidden;
  width: 480px;
  height: 320px;
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

export default Showcase;
