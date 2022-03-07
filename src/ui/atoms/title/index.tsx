import * as React from 'react';
import styled from 'styled-components/macro';

const h = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4'
} as const;

export type TitleLevel = keyof typeof h;

type TitleProps = {
  className?: string;
  level?: TitleLevel;
  children?: React.ReactNode;
};

export const Title: React.FC<TitleProps> = ({
  className,
  level = 2,
  children
}) => {
  return (
    <TitleContainer className={className} as={h[level]} level={level}>
      {children}
    </TitleContainer>
  );
};

type MapProps = {
  level: TitleLevel;
};

const map = (props: MapProps) => ({
  'data-level': props.level
});

const TitleContainer = styled.div.attrs(map)<MapProps>`
  color: var(--title-color);
  font-weight: 700;
  letter-spacing: -0.3px;

  &[data-level='1'] {
    font-size: 22px;
    line-height: 28px;
  }

  &[data-level='2'] {
    font-size: 18px;
    height: 38px;
    line-height: 38px;
  }

  &[data-level='3'] {
    font-size: 14px;
    line-height: 28px;
  }

  &[data-level='4'] {
    font-size: 12px;
    line-height: 24px;
  }
`;
