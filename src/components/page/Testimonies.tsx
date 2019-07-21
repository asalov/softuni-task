import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import { ITestimony } from 'models';
import Testimony from 'components/shared/Testimony';

interface Props {
  testimonies: ITestimony[];
};

const Testimonies: React.FC<Props> = ({ testimonies }) => {
  const myRef = useRef<HTMLDivElement>(null);
  const [activeTestimony, setActiveTestimony] = useState(3);

  const changeActiveTestimony = (itemId: number, target: any): void => {
    setActiveTestimony(itemId);

    const element = myRef.current;

    if (element) {
      element.scrollLeft = (target.offsetLeft / 2);
    }
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
    <Container ref={myRef}>
      {renderTestimonies()}
    </Container>
  );
};

const Container = styled.div`
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

export default Testimonies;
