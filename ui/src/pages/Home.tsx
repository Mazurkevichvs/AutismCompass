import React, { useRef } from 'react';
import { AboutSection, FactsAndMyths, Slider } from '../components';
import {HEADSLIDERTITLES, MESSAGESLIDERTITLES, scrollToSection} from '../consts/consts'


const Home: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Slider homeRef={homeRef} isHead={true} data={HEADSLIDERTITLES} scrollToSection={scrollToSection}/>
      <AboutSection homeRef={homeRef}/>
      <Slider isHead={false} data={MESSAGESLIDERTITLES}/>
      <FactsAndMyths />
    </>
  );
};

export default Home;
