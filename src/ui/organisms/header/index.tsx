import * as React from 'react';
import styled from 'styled-components/macro';

import { Container, Logo } from 'ui/atoms';
import { Nav } from 'ui/molecules';

const navLinks = [
  { label: 'Browser', to: '/browser' },
  { label: 'Evaluation', to: '/evaluation' }
];

export const Header: React.FC = ({ children }) => {
  return (
    <HeaderWrap>
      <HeaderContainer>
        {/* <HeaderLogo /> */}
        <HeaderNav links={navLinks} />
        {children}
      </HeaderContainer>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  height: var(--header-height);
  border-bottom: 1px solid var(--border-color);
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  width: 100%;
`;

// const HeaderLogo = styled(Logo)`
//   line-height: var(--header-height);
//   margin-right: 36px;
// `;

const HeaderNav = styled(Nav)`
  width: auto;
`;
