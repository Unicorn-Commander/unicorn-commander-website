import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import BackgroundSparkles from '../components/BackgroundSparkles';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Portfolio.css';

// Correct import path
const LazyImage = lazy(() => import('../components/LazyImage'));

function Portfolio() {
  const projects = [
    {
      title: "AI-Powered Chatbot",
      description: "Intelligent customer support solution with natural language processing capabilities. Handles complex queries and learns from interactions.",
      tags: ["AI", "NLP", "React", "Node.js"],
      image: "https://placehold.co/600x400/1a1a1a/cccccc",
      links: {
        demo: "https://demo.example.com/chatbot",
        github: "https://github.com/example/chatbot"
      }
    },
    // ... other projects
  ];

  return (
    <div className="page-container">
      <BackgroundSparkles />
      <PageHeader 
        title="Our Portfolio" 
        subtitle="Explore our magical creations"
      />
      
      <main className="page-content">
        <div className="container">
          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="portfolio-card card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="portfolio-image">
                  <Suspense fallback={<div>Loading...</div>}>
                    <LazyImage src={project.image} alt={project.title} />
                  </Suspense>
                </div>
                <div className="portfolio-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="portfolio-links">
                    <motion.a 
                      href={project.links.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </motion.a>
                    <motion.a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaGithub /> View Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Portfolio;
