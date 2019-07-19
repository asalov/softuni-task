import React from 'react';
import styled from 'styled-components';

import stats from 'data/stats';

import NavMenu from 'components/page/NavMenu';
import CallToAction from 'components/shared/CallToAction';
import OverlayPanel from 'components/shared/OverlayPanel';
import Stat from 'components/shared/Stat';

import { colors } from 'styles/palette';

const Showcase: React.FC = () => {
  const renderStats = (): React.ReactElement[] => {
    return stats.map((stat) => <Stat {...stat} />);
  };

  return (
    <ShowcaseContainer>
      <NavMenu />
      <CallToAction
        title="Become a Software Developer Learn to code and start your career"
        subtitle="Enroll in our end-to-end program. Start now with a free course"
      />
      <VideoWrapper>
        <VideoThumbnail />
        <VideoTitle>Learn about programming</VideoTitle>
      </VideoWrapper>
      <OverlayPanel>
        {renderStats()}
      </OverlayPanel>
    </ShowcaseContainer>
  );
};

const ShowcaseContainer = styled.div`
  background: url('img/home-page-hero.jpg') no-repeat;
  background-size: cover;
  position: relative;
`;

const VideoWrapper = styled.div`

`;

const VideoThumbnail = styled.div`
  width: 320px;
  height: 200px;
  background: url('img/video-thumbnail.jpg') no-repeat;
  background-size: cover;
`;

const VideoTitle = styled.div`
  background: ${colors.white};
  text-transform: uppercase;
`;

export default Showcase;
