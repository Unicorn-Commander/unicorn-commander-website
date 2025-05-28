import React, { useState } from 'react'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import BackgroundSparkles from '../components/BackgroundSparkles'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaCopy, FaCheckCircle } from 'react-icons/fa'
import '../styles/Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create email content
    const emailSubject = encodeURIComponent(`Contact Form: ${formData.subject}`);
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Open email client
    window.location.href = `mailto:technologists@magicunicorn.tech?subject=${emailSubject}&body=${emailBody}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('technologists@magicunicorn.tech');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div className="page-container">
      <BackgroundSparkles />
      <PageHeader 
        title="Contact Us" 
        subtitle="Let's create something magical together"
        backgroundVariant="contact"
      />
      
      <main className="page-content">
        <div className="container">
          <div className="contact-grid">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="card-base">
                <h3 className="card-title">Get in Touch</h3>
                <div className="contact-details">
                  <div className="contact-item">
                    <FaEnvelope />
                    <span>technologists@magicunicorn.tech</span>
                    <motion.button 
                      className="copy-btn"
                      onClick={copyEmail}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      title="Copy email address"
                    >
                      {copied ? <FaCheckCircle /> : <FaCopy />}
                    </motion.button>
                  </div>
                </div>
                <div className="social-links">
                  <motion.a 
                    href="https://github.com/Unicorn-Commander" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    title="GitHub"
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com/company/80870729/admin/dashboard/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    title="LinkedIn"
                  >
                    <FaLinkedin />
                  </motion.a>
                  <motion.a 
                    href="https://x.com/AaronStransky" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    title="Twitter"
                  >
                    <FaTwitter />
                  </motion.a>
                  <motion.a 
                    href="https://www.facebook.com/MagicUnicorn.Tech/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    title="Facebook"
                  >
                    <FaFacebook />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="contact-form-container"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <form className="contact-form card-base" onSubmit={handleSubmit}>
                <div className="form-info">
                  <p>Fill out the form below and we'll open your email client with the message ready to send!</p>
                </div>
                
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <motion.button 
                  type="submit" 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Open Email Client
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contact
