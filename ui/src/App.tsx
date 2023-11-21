import React from 'react';
import './App.scss';
import { Header, Footer, SupportForm } from './components';
import { Routes, Route } from 'react-router-dom';
import {Home, Support} from './pages/index';

const NAVIGATIONS = [
  {
    name: 'Czym jest autyzm?',
    path: '/czym-jest-autyzm',
    sublinks: [
      { name: 'Podlink 1', path: '/czym-jest-autyzm/link1' },
      { name: 'Podlink 2', path: '/czym-jest-autyzm/link2' },
    ],
  },
  {
    name: 'Wsparcie dla osób z autyzmem',
    path: '/wsparcie',
    sublinks: [
      { name: 'Podlink 3', path: '/wsparcie/link3' },
      { name: 'Podlink 4', path: '/wsparcie/link4' },
    ],
  },
  { name: 'Test diagnozujący', path: '/test-diagnozujacy' },
  { name: 'Wydarzenia', path: '/wydarzenia' },
];

const App: React.FC = () => {
  return (
    <>
      <Header navigations={NAVIGATIONS}/>
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      </main>
      <SupportForm/>
      <Footer navigations={NAVIGATIONS}/>
    </>
  );
};

export default App;
