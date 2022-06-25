import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Register from './pages/Register';

import "antd/dist/antd.min.css";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CollapsibleExample from './components/bootstrap-navbar';


function App() {
  return (
    <>
      
      
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Register />} />
          
        

          
        </Routes>
        
      </BrowserRouter>
      
    </>
  );
}

export default App;
