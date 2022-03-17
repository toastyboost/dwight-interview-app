import * as React from 'react';
import { useStore } from 'effector-react';
import styled from 'styled-components/macro';

import { Checkbox, Section, SectionHeader, SectionContent } from 'ui/atoms';
import { CopyArea } from 'ui/molecules';

import { browserQuestions } from 'libs/mocks';
import { objectKeys } from 'libs/objectKeys';

import { setBrowserTheme, $browserThemes } from './model';

type BrowserProps = {};

export const Javascript: React.FC<BrowserProps> = () => {
  const themes = objectKeys(browserQuestions);
  const browserThemes = useStore($browserThemes);
  return (
    <BrowserContainer>
      <SectionHeader title={<>How browser works</>} titleLevel={1} />

      <Section>
        {themes.map((theme) => (
          <SectionContent col={4}>
            <SectionHeader title={theme} titleLevel={3} />
            {browserQuestions[theme].map(({ name, points }) => (
              <Parameter key={name}>
                <Checkbox
                  onChange={() => {
                    setBrowserTheme({ name, points });
                  }}
                >
                  {name}
                </Checkbox>
              </Parameter>
            ))}
          </SectionContent>
        ))}
      </Section>
      <br />
      <SectionContent col={12}>
        <CopyArea>
          {browserThemes.map(({ name }) => (
            <>
              {name} <br />
            </>
          ))}
        </CopyArea>
      </SectionContent>
    </BrowserContainer>
  );
};

const BrowserContainer = styled.div`
  width: 100%;
`;

const Parameter = styled.div`
  width: 100%;
`;
