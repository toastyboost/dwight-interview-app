import styled from 'styled-components/macro';

import { MEDIA } from 'libs/media';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  ${MEDIA.PHONE`
    max-width: 320px;
  `}

  ${MEDIA.SMARTPHONE`
    max-width: 425px;
    padding: 0 6px;
  `}
  
  ${MEDIA.TABLET`
    max-width: 1024px;
    padding: 0 12px;
  `}
  
  ${MEDIA.DESKTOP`
    max-width: 1280px;
    padding: 0 18px;
  `};
`;
