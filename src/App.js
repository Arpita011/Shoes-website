import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes instead of Switch

import Home from './Page/Home';
import About from './Page/About';
import Shoes from './Page/Shoes';
import Contact from './Page/Contact';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
           <Route path="/shoes" element={<Shoes />} />
           <Route path="/contact" element={<Contact />} />
           
        
        </Routes>
       
      </div>
    </Router>
  );
};

export default App;
