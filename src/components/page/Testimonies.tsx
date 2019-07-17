import React from 'react';
import styled from 'styled-components';

import Testimony from 'components/shared/Testimony';

interface Props {
  testimonies: any[];
};

const Testimonies: React.FC<Props> = ({ testimonies }) => {
  const renderTestimonies = (): React.ReactElement[] => {
    return testimonies.map((testimony) => <Testimony {...testimony} />)
  };

  return (
    <Container>
      {renderTestimonies()}
    </Container>
  );
};

const Container = styled.div`
  background: #eee;
`;

export default Testimonies;
