import * as React from 'react';
import styled from 'styled-components/macro';

import { Container } from 'ui/atoms';

export const Page404: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>404</Title>
        <Description>The page you're looking for can't be found.</Description>
      </Content>
    </Container>
  );
};

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: calc(
    100vh - var(--header-height) - var(--footer-height) - var(--crumbs-height)
  );
`;

const Title = styled.h1`
  font-size: 72px;
  font-weight: 700;
  color: var(--gray);
`;

const Description = styled.div`
  margin: 6px 0 24px 0;
  font-family: var(--apple);
`;
