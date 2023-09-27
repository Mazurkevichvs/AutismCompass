import React from 'react';
import { AboutSection, FactsAndMyths, Slider, SupportForm } from '..';
import './Main.scss';

const Main: React.FC = () => {
  return (
    <>
      <main className='main'>
        <Slider />
        <AboutSection />
        <Slider />
        <FactsAndMyths/>
        <SupportForm/>
      </main>
    </>
  );
};

export default Main;
