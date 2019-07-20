import styled, { css } from 'styled-components';

export const defaultFont = css`
  font-size: 1.6rem;
  line-height: 1.5;
`;

export const Title = styled.h2`
  font-size: 2.6rem;
  line-height: 1.5;
`;

export const Paragraph = styled.p`
  ${defaultFont}
  margin: 0 0 20px 0;
`;
