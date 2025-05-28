import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import FirstSection from "./Components/FirstSection";
import Footer from "./Components/FooterSection";
import WomensPage from "./Components/WomensPage";
import MensPage from "./Components/MensPage";
import AccessoriesPage from "./Components/AccessoriesPage";
import SalesPage from "./Components/SalesPage";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Login from "./Components/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <FirstSection />
            </>
          }
        />
        <Route path="/womens" element={<WomensPage />} />
        <Route path="/mens" element={<MensPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/sale" element={<SalesPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
