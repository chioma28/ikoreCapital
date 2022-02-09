import React from 'react';
import './App.css';
import Home from './pages'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DropYourPitchPage from './pages/dropyourpitch';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/drop-your-pitch" element={<DropYourPitchPage />} exact />
      </Routes>  
    </Router> 
  );
}

export default App;
