import React from 'react';
import styled from 'styled-components';

import Header from 'components/page/Header';
import Footer from 'components/page/Footer';
import Button from 'components/shared/Button';

const App: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Button text="Apply" isPrimary />
      <Button text="Curriculum" />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #ccc;
`;

export default App;
