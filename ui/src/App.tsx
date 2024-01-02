import React from 'react';
import './App.scss';
import { Header, Footer, SupportForm } from './components';
import { Routes, Route } from 'react-router-dom';
import {Events, Home, Support, Test} from './pages/index';
import { NAVIGATIONS } from './consts/consts';



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
