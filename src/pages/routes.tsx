import * as React from 'react';
import { RouteProps } from 'react-router-dom';
import { path } from 'libs/path';
import { Evaluation, Browser, Page404 } from 'pages';

export type CustomRoute = {
  name?: string;
  routes?: CustomRoute[];
} & RouteProps;

export const ROUTES: CustomRoute[] = [
  {
    name: 'browser',
    element: <Browser />,
    path: path.browser()
  },
  {
    name: 'evaluation',
    element: <Evaluation />,
    path: path.evaluation()
  },
  {
    name: '404',
    element: <Page404 />,
    path: '*'
  }
];
