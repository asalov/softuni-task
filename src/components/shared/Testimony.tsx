import React from 'react';
import styled from 'styled-components';

import { colors } from 'styles/palette';

interface Props {
  opinion: string;
  name: string;
  photo: string;
  job: string;
};

const Testimony: React.FC<Props> = ({ opinion, name, photo, job }) => (
  <TestimonyWrapper>
    <Opinion>
      {opinion}
      <Image src={photo} alt={name} />
    </Opinion>
    <Name>{name}</Name>
    <div>{job}</div>
  </TestimonyWrapper>
);

const TestimonyWrapper = styled.div`
  text-align: center;
  max-width: 360px;
  margin: 0 auto;
`;

const Opinion = styled.div`
  font-style: italic;
  background: ${colors.white};
  padding: 50px 10px;
  position: relative;
  border-radius: 5px;
  font-size: 1.2rem;
  line-height: 2.8rem;
  box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.2);
`;

const Image = styled.img`
  border-radius: 50%;
  max-width: 70px;
  position: absolute;
  bottom: -35px;
  left: calc(50% - 35px);
`;

const Name = styled.div`
  font-weight: bold;
  margin-top: 40px;
`;

export default Testimony;
