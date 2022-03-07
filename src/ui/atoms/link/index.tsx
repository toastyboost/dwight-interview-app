import * as React from 'react';
import * as Router from 'react-router-dom';

import styled from 'styled-components/macro';

type LinkProps = {
  className?: string;
  to?: string;
};

export const Link: React.FC<LinkProps> = ({
  children,
  className,
  to = '/'
}) => {
  return (
    <LinkContainer className={className} to={to}>
      {children}
    </LinkContainer>
  );
};

const LinkContainer = styled(Router.Link)`
  font-family: var(--apple);
  font-size: 13px;
  line-height: 17px;
  text-decoration: none;
  color: var(--link-color);

  &:hover {
    color: var(--link-color--hover);
  }
`;
