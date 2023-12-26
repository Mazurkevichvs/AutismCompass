import React, { useRef } from 'react';
import { HeadingSection, TestAbout, TestQuestionsList, TestResult } from '../components';
import { scrollToSection } from '../consts/consts';

const Test: React.FC = () => {
  const testSectionRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <HeadingSection scrollToSection={scrollToSection} eventSectionRef={testSectionRef} bgImage={'test-heading'} title={'Test diagnozujący'} />
      <TestAbout eventSectionRef={testSectionRef}/>
      <TestQuestionsList/>
      <TestResult/>
    </>
  );
};

export default Test;
