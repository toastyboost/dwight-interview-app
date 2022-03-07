import { createEvent, createStore, sample } from 'effector';
import { NavigateFunction } from 'react-router-dom';

type Mounted = {
  navigate: NavigateFunction;
};

export const mounted = createEvent<Mounted>();
export const toPath = createEvent<string>();
export const back = createEvent<void>();

export const $navigate = createStore<NavigateFunction | null>(null);
export const $isNavigateExist = $navigate.map(Boolean);

$navigate.on(mounted, (_, { navigate }) => navigate);

sample({
  source: $navigate,
  clock: toPath,
  fn: (navigate, event) => ({ navigate, event })
}).watch(({ navigate, event }) => navigate && navigate(event));

sample({
  source: $navigate,
  clock: back
}).watch((navigate) => navigate && navigate(-1));
