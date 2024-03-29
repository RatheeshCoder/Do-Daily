import React from 'react';
import './styles/style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/header/header';
import HomeMain from './pages/home/HomeMain';
import FooterCTA from './components/Footer/FooterCTA';
import Footer from './components/Footer/Footer';
import AboutMain from './pages/Abouts/AboutMain';


export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
      
          <Route index element={<HomeMain />} />
          <Route path="/About Us" element={<AboutMain />} />
          
        
      </Routes>
      <FooterCTA/>
      <Footer/>
    </BrowserRouter>
  );
}
