import * as React from 'react';

import styled from 'styled-components/macro';

type CopyProps = {
  className?: string;
};

export const CopyArea: React.FC<CopyProps> = ({ children, className }) => {
  return <CopyContainer className={className}>{children}</CopyContainer>;
};

const CopyContainer = styled.div`
  border: 1px solid #000;
  border-radius: 3px;
  padding: 12px;
`;
