import { createStore, createEvent } from 'effector';

export type Impression = {
  name: string;
  points: number;
};

// positive

export const setBrowserTheme = createEvent<Impression>();

export const $browserThemes = createStore<Impression[]>([]);

$browserThemes.on(setBrowserTheme, (themes, event) => {
  const isKeyExist = themes.some((theme) => theme.name === event.name);

  if (isKeyExist) {
    return themes.filter((theme) => theme.name !== event.name);
  }

  return [...themes, event];
});
