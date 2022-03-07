import * as React from 'react';
import * as UI from 'antd';

type CheckboxProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button: React.FC<CheckboxProps> = ({ onClick, children }) => {
  return <UI.Button onClick={onClick}>{children}</UI.Button>;
};
