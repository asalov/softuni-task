import React from 'react';
import styled from 'styled-components';

import { ITestimony } from 'models';
import { WhitePanel, flexCenter } from 'styles/layout';
import { defaultFont } from 'styles/content';

interface Props extends ITestimony {
  isActive: boolean;
  changeStatus: (id: number) => void;
};

const Testimony: React.FC<Props> = ({ id, opinion, name, photo, job, isActive, changeStatus }) => {

  const onClick = (e: React.MouseEvent) => changeStatus(id);

  return (
    <TestimonyWrapper isActive={isActive}>
      <Opinion isActive={isActive} onClick={onClick}>
        {opinion}
        {isActive && <Image src={photo} alt={name} />}
      </Opinion>
      {isActive &&
        <>
          <Name>{name}</Name>
          <Job>{job}</Job>
        </>
      }
    </TestimonyWrapper>
  );
};

const TestimonyWrapper = styled.div<{ isActive?: boolean }>`
  display: inline-block;
  text-align: center;
  max-width: 360px;
  margin: 0 20px;
  white-space: normal;
  vertical-align: middle;
  opacity: ${p => p.isActive ? 1 : 0.6 };
`;

const Opinion = styled(WhitePanel)<{ isActive?: boolean}>`
  font-style: italic;
  padding: 50px 10px;
  position: relative;
  font-size: ${p => p.isActive ? '1.4rem' : '1.2rem'};
  line-height: 2.2;
  min-height: 200px;
  cursor: pointer;
  ${flexCenter}
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
  ${defaultFont}
  font-weight: bold;
  margin-top: 40px;
`;

const Job = styled.div`
  ${defaultFont}
`;

export default Testimony;
