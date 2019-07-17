import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  name: string;
  photo: string;
  job: string;
};

const Testimony: React.FC<Props> = ({ title, name, photo, job }) => (
  <TestimonyWrapper>
    <Title>{title}</Title>
    <Image src={photo} alt={name} />
    <Name>{name}</Name>
    <div>{job}</div>
  </TestimonyWrapper>
);

const TestimonyWrapper = styled.div`
  background: #fff;
  border-radius: 5px;
`;

const Title = styled.div`
  font-style: italic;
`;

const Image = styled.img`
  border-radius: 50%;
`;

const Name = styled.div`
  font-weight: bold;
`;

export default Testimony;
