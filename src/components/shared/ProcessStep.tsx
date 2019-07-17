import React from 'react';

interface Props {
  number: number;
  title: string;
  description: string;
  additionalInfo?: string;
};

const ProcessStep: React.FC<Props> = ({ number, title, description, additionalInfo }) => (
  <div>{title}</div>
);

export default ProcessStep;
