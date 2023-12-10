import React from 'react';
import { AboutSection, FactsAndMyths, Slider } from '../components';

const Home: React.FC = () => {
  return (
    <>
        <Slider />
        <AboutSection />
        <Slider />
        <FactsAndMyths/>
    </>
  );
};

export default Home;
