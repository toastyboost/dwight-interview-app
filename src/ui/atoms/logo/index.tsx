import * as React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'ui/atoms';

type LogoProps = {
  className?: string;
};

export const Logo: React.FC<LogoProps> = ({ className }) => (
  <LogoContaner className={className}>DIA</LogoContaner>
);

const LogoContaner = styled.a`
  color: var(--text-color);
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  align-items: center;
  position: relative;
  top: -1px;

  sup {
    font-size: 10px;
    margin-left: 4px;
    letter-spacing: -0.5px;
    top: -8px;
    position: relative;
    text-transform: lowercase;
  }
`;
