import React, { useState } from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import { ITestimony } from 'models';
import Testimony from 'components/shared/Testimony';
import SliderDots from 'components/shared/SliderDots';

interface Props {
  testimonies: ITestimony[];
};

const Testimonies: React.FC<Props> = ({ testimonies }) => {
  const [activeTestimony, setActiveTestimony] = useState(1);

  const changeActiveTestimony = (itemId: number): void => {
    setActiveTestimony(itemId);
  }

  const renderTestimonies = (): React.ReactElement[] => {
    return testimonies.map((item: ITestimony) =>
      <Testimony
        key={item.id}
        {...item}
        isActive={item.id === activeTestimony}
        changeStatus={changeActiveTestimony}
      />
    )
  };

  return (
    <Container>
      {renderTestimonies()}
      <DotsWrapper>
        <SliderDots active={activeTestimony} total={testimonies.length} />
      </DotsWrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  background: #eee;
  white-space: nowrap;
  padding: 100px 0;
  overflow-x: scroll;

  /* Hide horizontall scrollbar */
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const DotsWrapper = styled.div`
  ${up('tablet')} {
    display: none;
  }
`;

export default Testimonies;
