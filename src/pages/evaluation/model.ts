import { createStore, createEvent } from 'effector';

export type Impression = {
  name: string;
  points: number;
};

// positive

export const setPositiveImpression = createEvent<Impression>();

export const $generalPositiveImpression = createStore<Impression[]>([]);

$generalPositiveImpression.on(setPositiveImpression, (impresions, event) => {
  const isKeyExist = impresions.some(
    (impresion) => impresion.name === event.name
  );

  if (isKeyExist) {
    return impresions.filter((impresion) => impresion.name !== event.name);
  }

  return [...impresions, event];
});

// negative

export const setNegativeImpression = createEvent<Impression>();

export const $generalNegativeImpression = createStore<Impression[]>([]);

$generalNegativeImpression.on(setNegativeImpression, (impresions, event) => {
  const isKeyExist = impresions.some(
    (impresion) => impresion.name === event.name
  );

  if (isKeyExist) {
    return impresions.filter((impresion) => impresion.name !== event.name);
  }

  return [...impresions, event];
});
