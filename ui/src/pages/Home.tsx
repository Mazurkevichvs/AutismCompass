import React from 'react';
import { AboutSection, FactsAndMyths, Slider } from '../components';

const HEADSLIDERTITLES = [
  { title: 'Lorem ipsum dolor sit amet consectetur.' },
  { title: 'Lorem ipsum dolor sit amet consectetur.' },
  { title: 'Lorem ipsum dolor sit amet consectetur.' },
  { title: 'Lorem ipsum dolor sit amet consectetur.' },
];

const MESSAGESLIDERTITLES = [
  { title: 'Stimy – Jakie jest znaczenie dla osób na spektrum autyzmu?Stimy to powtarzanie ruchów, dźwięków lub manipulowanie przedmiotami w sposób regularny, takie jak machanie rękoma czy wiercenie się. Dlaczego osoby z autyzmem angażują się w stimy?' },
  { title: 'Stimy – Jakie jest znaczenie dla osób na spektrum autyzmu?Stimy to powtarzanie ruchów, dźwięków lub manipulowanie przedmiotami w sposób regularny, takie jak machanie rękoma czy wiercenie się. Dlaczego osoby z autyzmem angażują się w stimy?' },
  { title: 'Stimy – Jakie jest znaczenie dla osób na spektrum autyzmu?Stimy to powtarzanie ruchów, dźwięków lub manipulowanie przedmiotami w sposób regularny, takie jak machanie rękoma czy wiercenie się. Dlaczego osoby z autyzmem angażują się w stimy?' },
  { title: 'Stimy – Jakie jest znaczenie dla osób na spektrum autyzmu?Stimy to powtarzanie ruchów, dźwięków lub manipulowanie przedmiotami w sposób regularny, takie jak machanie rękoma czy wiercenie się. Dlaczego osoby z autyzmem angażują się w stimy?' },
  
];

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
