import React from 'react';
import './App.css';
import { Main, Header, Footer } from './components';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
