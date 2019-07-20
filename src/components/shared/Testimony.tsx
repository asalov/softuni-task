import React from 'react';
import styled from 'styled-components';

import { WhitePanel } from 'styles/layout';

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

const Opinion = styled(WhitePanel)`
  font-style: italic;
  padding: 50px 10px;
  position: relative;
  font-size: 1.2rem;
  line-height: 2.2;
`;

const avatarSize = 70;

const Image = styled.img`
  border-radius: 50%;
  position: absolute;
  ${`
    max-width: ${avatarSize}px;
    bottom: -${avatarSize / 2}px;
    left: calc(50% - ${avatarSize /2}px);
  `}
`;

const Name = styled.div`
  font-weight: bold;
  margin-top: 40px;
`;

export default Testimony;
