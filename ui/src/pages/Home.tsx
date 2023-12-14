import React from 'react';
import { AboutSection, FactsAndMyths, Slider } from '../components';
import {HEADSLIDERTITLES, MESSAGESLIDERTITLES} from '../consts/consts'


const Home: React.FC = () => {
  return (
    <>
      <Slider isHead={true} data={HEADSLIDERTITLES}/>
      <AboutSection />
      <Slider isHead={false} data={MESSAGESLIDERTITLES}/>
      <FactsAndMyths />
    </>
  );
};

export default Home;
