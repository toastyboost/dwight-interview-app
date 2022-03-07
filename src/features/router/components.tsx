import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'effector-react';

import { $isNavigateExist, mounted } from './model';

export const RouterHistory: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const isExist = useStore($isNavigateExist);

  React.useEffect(() => {
    mounted({ navigate });
  }, [navigate]);

  if (isExist) {
    return <>{children}</>;
  }

  return null;
};
