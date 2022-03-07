import * as React from 'react';
import styled from 'styled-components/macro';

import { Container } from 'ui/atoms';
import { Header } from 'ui/organisms';

export const GenericLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        <Container>{children}</Container>
      </Main>
    </>
  );
};

const Main = styled.main`
  padding-top: 18px;
  min-height: calc(100vh - var(--header-height) - var(--footer-height));
  font-family: var(--apple);
`;
