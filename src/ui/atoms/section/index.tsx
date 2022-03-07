import * as React from 'react';
import styled from 'styled-components/macro';

import { Title, TitleLevel } from 'ui/atoms';
import { Col, Row } from 'ui/molecules';

type SectionProps = {
  className?: string;
};

export const Section: React.FC<SectionProps> = ({ className, children }) => {
  return <SectionContainer className={className}>{children}</SectionContainer>;
};

const SectionContainer = styled(Row)<SectionProps>``;

type SectionHeaderProps = {
  className?: string;
  title?: React.ReactNode;
  titleLevel?: TitleLevel;
  extra?: React.ReactNode;
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  className,
  children,
  title,
  extra,
  titleLevel
}) => {
  return (
    <SectionHeaderContainer className={className}>
      <SectionHead>
        <SectionHeaderTitle level={titleLevel}>{title}</SectionHeaderTitle>
      </SectionHead>
      {children}
      {extra && <SectionHeaderExtra>{extra}</SectionHeaderExtra>}
    </SectionHeaderContainer>
  );
};

const SectionHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  width: 100%;
`;

const SectionHead = styled.div`
  display: flex;
  align-items: center;
`;

const SectionHeaderTitle = styled(Title)`
  display: flex;
  align-items: center;
`;

const SectionHeaderExtra = styled.div`
  margin-left: auto;
`;

type SectionContentProps = {
  className?: string;
  col?: number;
};

export const SectionContent: React.FC<SectionContentProps> = ({
  className,
  children,
  col = 12
}) => {
  return (
    <SectionContentContainer className={className} col={col}>
      {children}
    </SectionContentContainer>
  );
};

const SectionContentContainer = styled(Col)``;
