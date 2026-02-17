import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <div className="min-h-screen bg-[#F8F6F2] text-gray-800">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/project/:id" element={
          <>
            <ProjectDetail />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
