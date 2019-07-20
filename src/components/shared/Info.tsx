import React from 'react';

import { Title } from 'styles/content';
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

export default Info;
