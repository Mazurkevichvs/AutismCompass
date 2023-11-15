import React from 'react';
import './App.scss';
import { Main, Header, Footer } from './components';
import { Routes, Route } from 'react-router-dom';
import Support from './pages/Support';

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
        <Route path="/" element={<Main />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      </main>
      <Footer navigations={NAVIGATIONS}/>
    </>
  );
};

export default App;
