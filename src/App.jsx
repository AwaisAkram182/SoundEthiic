import React from 'react';
import About from './Pages/About';
import Solution from './Pages/Solution';
import Contact from './Pages/Contact';
import Updates from './Pages/Updates';
import { Routes, Route } from "react-router-dom";
import Hero from './Pages/Hero'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/About" element={<About />} />
        <Route path="/Solution" element={<Solution />} />
        <Route path="/Updates" element={<Updates />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
