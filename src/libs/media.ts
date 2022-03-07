import {
  css,
  FlattenSimpleInterpolation,
  CSSObject
} from 'styled-components/macro';

import { BREAKPOINTS } from 'libs/constants';

type MediaObject = {
  [T in keyof typeof BREAKPOINTS]: (
    props: TemplateStringsArray | CSSObject
  ) => FlattenSimpleInterpolation;
};

const defaults = {
  DESKTOP: () => css``,
  TABLET: () => css``,
  SMARTPHONE: () => css``,
  PHONE: () => css``
};

export const MEDIA = (
  Object.keys(BREAKPOINTS) as (keyof typeof BREAKPOINTS)[]
).reduce<MediaObject>((accumulator, label: keyof typeof BREAKPOINTS) => {
  const relativeEmToPxRatio = 16;
  accumulator[label] = (properties) => css`
    @media (min-width: ${BREAKPOINTS[label] / relativeEmToPxRatio}em) {
      ${css(properties)};
    }
  `;
  return accumulator;
}, defaults);
