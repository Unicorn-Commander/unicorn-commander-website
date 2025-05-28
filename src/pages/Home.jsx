import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaCubes, FaCloud, FaBolt, FaSearch, FaTools } from 'react-icons/fa';
import { UnicornLogo } from '../images';
import '../styles/Home.css';

// Lazy load components
const LazyImage = lazy(() => import('../components/LazyImage'));

export default function Home() {
  return (
    <div className="home">
      {/* Magic Unicorn presents text - top left */}
      <motion.div 
        className="magic-unicorn-presents"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Magic Unicorn presents...
      </motion.div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="sparkles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="sparkle"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <motion.img 
            src={UnicornLogo}
            alt="Magic Unicorn Logo" 
            className="hero-logo"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </Suspense>
        <motion.div 
          className="product-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Unicorn Commander: UC-1
        </motion.div>
        <motion.h1 
          className="glowing-text"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="headline-emphasis">Take Command</span> of Your Squad. 
          <span className="headline-emphasis">Dominate</span> Your Workflow. 
          <span className="headline-emphasis">Enjoy the Freedom</span> to Spend Your Time However You Want.
        </motion.h1>
        <motion.p 
          className="tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Run the models you love—locally or from the cloud. UC-1 plays nice with OpenAI, Anthropic, Gemini, and more.
        </motion.p>
        <div className="cta-buttons">
          <div className="cta-container">
            <motion.a 
              href="https://buy.stripe.com/cNi5kDf0h0n45K2cHk18c00" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Order Now
            </motion.a>
            <motion.span 
              className="price-tag"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              $1,500
            </motion.span>
          </div>
          <motion.a 
            href="/features" 
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            Explore Features
          </motion.a>
        </div>
      </section>

      {/* Demo Video Feature */}
      <section className="demo-section">
        <div className="container">
          <motion.div 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>See UC-1 in Action</h2>
          </motion.div>
          <div className="video-container">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/nE3glhp2Pg8" 
              title="UC-1 Demo Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <motion.p 
            className="video-caption"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Discover how UC-1 transforms AI workflows with local power and modular flexibility.
          </motion.p>
        </div>
      </section>

      {/* Key Features Snapshot */}
      <section className="features-section">
        <div className="container">
          <motion.div 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Powerful, Private, Modular</h2>
          </motion.div>

          <div className="features-grid">
            <motion.div 
              className="feature-card"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FaShieldAlt className="feature-icon" />
              <h3>Privacy & Full Local Control</h3>
              <p>Your data stays with you, always.</p>
            </motion.div>

            <motion.div 
              className="feature-card"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <FaCubes className="feature-icon" />
              <h3>Modular Hardware & Software Stack</h3>
              <p>Upgrade and customize on your terms.</p>
            </motion.div>

            <motion.div 
              className="feature-card"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <FaCloud className="feature-icon" />
              <h3>Supports All Top AI Providers</h3>
              <p>OpenAI, Anthropic, Gemini, Mistral, and more.</p>
            </motion.div>

            <motion.div 
              className="feature-card"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <FaBolt className="feature-icon" />
              <h3>One-Click AI & RAG Setup</h3>
              <p>Instant deployment, no PhD required.</p>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <FaSearch className="feature-icon" />
              <h3>Search & Deep Search</h3>
              <p>Find anything in your data with powerful search capabilities.</p>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0 }}
            >
              <FaTools className="feature-icon" />
              <h3>Local Tools & Function Servers</h3>
              <p>Run custom tools and function servers locally for complete control.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Freedom of Choice Banner */}
      <section className="freedom-section">
        <div className="container">
          <motion.div 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Freedom of Choice. Total Control.</h2>
            <p>Whether you prefer blazing-fast local inference or tapping into the latest frontier models from OpenAI, Anthropic, Gemini, or Mistral—we've got you covered. Unicorn Commander UC-1 connects securely to your API keys, letting you switch between providers or fall back on cloud when needed. No lock-in. Just power.</p>
          </motion.div>
          <div className="logos-grid">
            <motion.div 
              className="logo-placeholder"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <span>OpenAI</span>
            </motion.div>
            <motion.div 
              className="logo-placeholder"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span>Anthropic</span>
            </motion.div>
            <motion.div 
              className="logo-placeholder"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span>Google Gemini</span>
            </motion.div>
            <motion.div 
              className="logo-placeholder"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <span>Mistral</span>
            </motion.div>
            <motion.div 
              className="logo-placeholder"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <span>Cohere</span>
            </motion.div>
            <motion.div 
              className="logo-placeholder"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <span>Hugging Face</span>
            </motion.div>
            <motion.div 
              className="logo-placeholder"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <span>Together.ai</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Liberate Your AI?</h2>
            <p>Order your Unicorn Commander UC-1 today.</p>
            <a href="https://buy.stripe.com/cNi5kDf0h0n45K2cHk18c00" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Order Now</a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
