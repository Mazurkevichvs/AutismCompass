import React from 'react';
import { HeadingSection, TestAbout } from '../components';

const Test: React.FC = () => {
  return (
    <>
      <HeadingSection bgImage={'test-heading'} title={'Test diagnozujący'} />
      <TestAbout/>
    </>
  );
};

export default Test;
