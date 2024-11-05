import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Stream } from './pages/Stream';
import { Admin } from './pages/Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Stream />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;