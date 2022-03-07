import * as React from 'react';
import * as UI from 'antd';

import styled from 'styled-components/macro';

import { useLocation } from 'react-router';

import { toPath } from 'features/router';

export type NavLink = {
  label: string;
  to: string;
};

type NavProps = {
  links: NavLink[];
  onClick?: () => void;
};

export const Nav: React.FC<NavProps> = ({ links, onClick }) => {
  const location = useLocation();

  return (
    <NavigationContainer onClick={onClick}>
      <Navigation
        mode="horizontal"
        selectedKeys={[location.pathname]}
        onClick={(e) => {
          toPath(e.key);
        }}
      >
        {links.map(({ label, to }, key) => (
          <NavigationItem key={to}>{label}</NavigationItem>
        ))}
      </Navigation>
    </NavigationContainer>
  );
};

const NavigationContainer = styled.div`
  width: 100%;
`;

const Navigation = styled(UI.Menu)``;

const NavigationItem = styled(UI.Menu.Item)``;
