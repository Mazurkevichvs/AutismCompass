import React from 'react';
import './App.scss';
import { Header, Footer, SupportForm } from './components';
import { Routes, Route } from 'react-router-dom';
import {Events, Home, Support, Test} from './pages/index';

const NAVIGATIONS = [
  {
    name: 'Czym jest autyzm?',
    path: '/',
  },
  {
    name: 'Wsparcie dla osób z autyzmem',
    path: '/support',
  },
  { name: 'Wydarzenia', path: '/events' },
  { name: 'Test diagnozujący', path: '/test' },
];

const App: React.FC = () => {
  return (
    <>
      <Header navigations={NAVIGATIONS}/>
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/events" element={<Events />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <SupportForm/>
      </main>
      <Footer navigations={NAVIGATIONS}/>
    </>
  );
};

export default App;
