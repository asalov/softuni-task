import React from 'react';
import styled from 'styled-components';

import { MaxWidthContainer } from 'styles/layout';

interface Props {
  title: string;
};

const Info: React.FC<Props> = ({ title, children }) => {
  return (
    <MaxWidthContainer>
      <Title>{title}</Title>
      {children}
    </MaxWidthContainer>
  );
};

const Title = styled.h2`
  color: #bbb;
  text-transform: capitalize;
`;

export default Info;
