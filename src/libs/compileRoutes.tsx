import { CustomRoute } from 'pages';

import { notNull } from 'libs/notNull';

export function compileRoutes(routes: CustomRoute[]) {
  const arrayRoutes = compileSubRoutes(routes);

  return arrayRoutes
    .map((route) => {
      return {
        exact: route.path !== '*',
        ...route
      };
    })
    .filter(notNull);
}

function compileSubRoutes(routes: CustomRoute[]): CustomRoute[] {
  const plainRoutes: CustomRoute[] = [];

  for (const route of routes) {
    plainRoutes.push(route);

    if (route.routes) {
      const subRoutes = compileSubRoutes(route.routes);

      for (const subRoute of subRoutes) {
        plainRoutes.push(subRoute);
      }
    }
  }

  return plainRoutes;
}
