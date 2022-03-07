import * as React from 'react';
import styled from 'styled-components/macro';
import { useStore } from 'effector-react';

import { Checkbox, Section, SectionHeader, SectionContent } from 'ui/atoms';
import { CopyArea } from 'ui/molecules';

import { generalImpressions, technicalImpressions } from 'libs/mocks';

import {
  setPositiveImpression,
  $generalPositiveImpression,
  setNegativeImpression,
  $generalNegativeImpression
} from './model';

export const Evaluation: React.FC = () => {
  const generalPositiveImpression = useStore($generalPositiveImpression);
  const generalNegativeImpression = useStore($generalNegativeImpression);

  return (
    <EvaluationContainer>
      <SectionHeader title="Evaluation" titleLevel={1} />
      <SectionHeader title="General impression<" titleLevel={2} />
      <Section>
        <SectionContent col={6}>
          <SectionHeader title={<>Positive</>} titleLevel={3} />
          {generalImpressions.positive.map(({ name, points }) => (
            <Parameter key={name}>
              <Checkbox
                onChange={() => {
                  setPositiveImpression({ name, points });
                }}
              >
                {name}
              </Checkbox>
            </Parameter>
          ))}
        </SectionContent>
        <SectionContent col={6}>
          <SectionHeader title={<>Negative</>} titleLevel={3} />
          {generalImpressions.negative.map(({ name, points }) => (
            <Parameter key={name}>
              <Checkbox
                onChange={() => {
                  setNegativeImpression({ name, points });
                }}
              >
                {name}
              </Checkbox>
            </Parameter>
          ))}
        </SectionContent>
      </Section>
      <br />
      <SectionContent col={12}>
        <CopyArea>
          Strengths ✅
          {generalPositiveImpression.map(({ name }) => (
            <>
              <br /> - {name}
            </>
          ))}
          <br />
          <br />
          Weaknesses ❌
          {generalNegativeImpression.map(({ name }) => (
            <>
              <br /> - {name}
            </>
          ))}
        </CopyArea>
      </SectionContent>
      <br />
      <SectionHeader title={<>Technical impression</>} titleLevel={2} />
      <Section>
        <SectionContent col={6}>
          <SectionHeader title={<>Positive</>} titleLevel={3} />
          {technicalImpressions.positive.map(({ name }) => (
            <Parameter key={name}>
              <Checkbox onChange={() => {}}>{name}</Checkbox>
            </Parameter>
          ))}
        </SectionContent>
        <SectionContent col={6}>
          <SectionHeader title={<>Negative</>} titleLevel={3} />
          {technicalImpressions.negative.map(({ name }) => (
            <Parameter key={name}>
              <Checkbox onChange={() => {}}>{name}</Checkbox>
            </Parameter>
          ))}
        </SectionContent>
      </Section>
    </EvaluationContainer>
  );
};

const EvaluationContainer = styled.div`
  width: 100%;
`;

const Parameter = styled.div`
  width: 100%;
`;

// misc
// Candidate is looking for good project management
// Level is enough for customer interview and everyday routine
// Appreciates a good motivation in a working projects
