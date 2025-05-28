import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Specs from './pages/Specs';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Track page views with Google Analytics
function usePageViews() {
  const location = useLocation();

  useEffect(() => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view', {
        page_path: location.pathname,
      });
    }
  }, [location]);
}

// Main App component
function App() {
  usePageViews();

  return (
    <ErrorBoundary>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/specs" element={<Specs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </ErrorBoundary>
  );
}

export default App;
