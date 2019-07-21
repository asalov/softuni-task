import React from 'react';
import styled from 'styled-components';

interface Props {
  active: number;
  total: number;
};

const SliderDots: React.FC<Props> = ({ active, total }) => {
  const renderSliderDots = (): React.ReactElement[] => {
    let dots: React.ReactElement[] = [];

    for (let i = 0; i < total; i++) {
      dots.push(<SliderDot isActive={active === i + 1} />);
    }

    return dots;
  };

  return (
    <DotContainer>
      {renderSliderDots()}
    </DotContainer>
  );

};

const DotContainer = styled.div`
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translate(-50%, 0);
`;

const SliderDot = styled.div<{ isActive?: boolean}>`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #444;
  opacity: ${p => p.isActive ? 1 : 0.4};
  margin: 0 3px;
`;

export default SliderDots;
