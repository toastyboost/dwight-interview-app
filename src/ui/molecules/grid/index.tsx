import * as React from 'react';
import * as UI from 'antd';

import styled from 'styled-components/macro';

type Grid = {
  className?: string;
  col?: number;
};

export const Row: React.FC<Grid> = ({ children, className }) => {
  return <RowContainer className={className}>{children}</RowContainer>;
};

export const Col: React.FC<Grid> = ({ children, className, col = 12 }) => {
  return (
    <ColContainer className={className} span={col}>
      {children}
    </ColContainer>
  );
};

const RowContainer = styled(UI.Row)``;

const ColContainer = styled(UI.Col)``;
