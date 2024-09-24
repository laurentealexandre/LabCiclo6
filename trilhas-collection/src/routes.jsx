import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Trails from './components/Trails';
import Contact from './components/Contact';

function AppRoutes() {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trilhas" element={<Trails />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;