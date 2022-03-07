import * as React from 'react';

import { Checkbox } from 'ui/atoms';

type GreetingsProps = {};

export const greetings: React.FC<GreetingsProps> = () => {
  return (
    <>
      <Checkbox onChange={() => {}}>test</Checkbox>
    </>
  );
};
