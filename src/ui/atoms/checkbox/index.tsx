import * as React from 'react';
import * as UI from 'antd';

type CheckboxProps = {
  onChange: (e: boolean) => void
}
 
export const Checkbox: React.FC<CheckboxProps> = ({ onChange, children }) => {
  return <UI.Checkbox onChange={(e) => onChange(e.target.checked)}>{children}</UI.Checkbox>
}
 