import React, { useRef } from 'react';
import './pages.scss';
import { SupportAdvices, VideoSection, SupportTabs, HeadingSection } from '../components';
import { scrollToSection } from '../consts/consts';

const Support: React.FC = () => {
  const supportSectionRef = useRef<HTMLDivElement>(null);
  return (
    <>
    <HeadingSection scrollToSection={scrollToSection} eventSectionRef={supportSectionRef} bgImage={'support-family'} title={'Wsparcie dla osób z autyzmem'}/>
      <VideoSection eventSectionRef={supportSectionRef}/>
      <SupportTabs />
      <SupportAdvices />
    </>
  );
};

export default Support;
