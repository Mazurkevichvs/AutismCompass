import React from 'react';
import { AboutSection, FactsAndMyths, Slider, SupportForm } from '..';
import './Main.scss';

const Main: React.FC = () => {
  return (
    <>
        <Slider />
        <AboutSection />
        <Slider />
        <FactsAndMyths/>
        <SupportForm/>
    </>
  );
};

export default Main;
