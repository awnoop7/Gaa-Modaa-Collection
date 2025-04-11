import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import FirstSection from "./Components/FirstSection";
import Footer from "./Components/FooterSection";
import WomensPage from "./Components/WomensPage";
import MensPage from "./Components/MensPage";
import AccessoriesPage from "./Components/AccessoriesPage";
import SalesPage from "./Components/SalesPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <FirstSection />
          </>
        } />

       
        <Route path="/womens" element={<WomensPage />} />
        <Route path="/mens" element={<MensPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/sales" element={<SalesPage />} />



      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
