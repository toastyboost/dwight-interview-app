import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { RouterHistory } from 'features/router';
import { GenericLayout } from 'ui/templates';
import { ROUTES } from 'pages';
import { compileRoutes } from 'libs/compileRoutes';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <RouterHistory />
      <Pages />
    </BrowserRouter>
  );
};

const Pages: React.FC = () => {
  const routes = compileRoutes(ROUTES).map((route) => (
    <Route key={route.name} {...route} />
  ));

  return (
    <GenericLayout>
      <Routes>{routes}</Routes>
    </GenericLayout>
  );
};
