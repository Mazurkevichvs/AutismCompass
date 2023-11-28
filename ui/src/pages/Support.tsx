import React from 'react';
import './pages.scss';
import { SupportAdvices, VideoSection, SupportTabs, HeadingSection } from '../components';

const Support: React.FC = () => {
  return (
    <>
    <HeadingSection bgImage={'support-family'} title={'Wsparcie dla osób z autyzmem'}/>
      <VideoSection />
      <SupportTabs />
      <SupportAdvices />
    </>
  );
};

export default Support;
