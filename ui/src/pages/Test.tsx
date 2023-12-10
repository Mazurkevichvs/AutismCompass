import React from 'react';
import { HeadingSection, TestAbout, TestQuestionsList, TestResult } from '../components';

const Test: React.FC = () => {
  return (
    <>
      <HeadingSection bgImage={'test-heading'} title={'Test diagnozujący'} />
      <TestAbout/>
      <TestQuestionsList/>
      <TestResult/>
    </>
  );
};

export default Test;
