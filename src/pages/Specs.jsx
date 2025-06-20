import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaMicrochip, FaMemory, FaHdd, FaMicrophone, 
  FaFan, FaCube, FaWifi, FaBrain, FaDesktop, 
  FaSearch, FaPalette, FaMicrophoneAlt, FaCogs, 
  FaCode, FaGlobe, FaFlask, FaLock, FaBoxOpen
} from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import BackgroundSparkles from '../components/BackgroundSparkles';
import '../styles/Specs.css';

function Specs() {
  const [activeTab, setActiveTab] = useState('hardware');

  const hardwareSpecs = [
    { component: 'CPU', icon: <FaMicrochip />, description: 'AMD Ryzen 9 8945HS (Zen 4, 8c/16t)' },
    { component: 'GPU', icon: <FaPalette />, description: 'Radeon 780M iGPU (ROCm-ready) with optional dGPU expansion' },
    { component: 'RAM', icon: <FaMemory />, description: '96GB DDR5 (Upgradeable)' },
    { component: 'Storage', icon: <FaHdd />, description: '2TB NVMe SSD (Boot + Data)' },
    { component: 'Mic', icon: <FaMicrophone />, description: 'High-fidelity external mic for voice control' },
    { component: 'Cooling', icon: <FaFan />, description: 'RGB fan (quiet + cool)' },
    { component: 'Form Factor', icon: <FaCube />, description: 'Ultra-compact mini-PC (NUC-style)' },
    { component: 'Connectivity', icon: <FaWifi />, description: 'Wi-Fi 6E, Bluetooth 5.3, HDMI, Ethernet, USB-C' }
  ];

  const softwareCategories = [
    {
      title: 'Inference Engine',
      icon: <FaBrain />,
      items: [
        'Ollama (OpenAI-compatible API)',
        'Powered by models like LLaMA, Gemma, Qwen, Mixtral, and more',
        'Built on: llama.cpp (highly optimized C++ backend)'
      ]
    },
    {
      title: 'AI UI & Desktop Environment',
      icon: <FaDesktop />,
      items: [
        'Open-WebUI (agent support, tools, profiles)',
        'Bolt.DIY (customized as MagiCode — low-code frontend builder)',
        'Open Interpreter (natural language system control)',
        'KDE Plasma 6 (sleek, customizable desktop environment)'
      ]
    },
    {
      title: 'Search, RAG & Knowledge Systems',
      icon: <FaSearch />,
      items: [
        'Qdrant – vector DB for document embeddings',
        'Redis – fast caching layer',
        'PostgreSQL – structured data + pgvector',
        'SearxNG – meta-search engine for deep queries',
        'Nomic Embeddings (nomic-embed-text and nomic-embed-vision)',
        'Mixed Bread AI – GPU-accelerated reranker',
        'GraphRAG Server – FastAPI-based knowledge graph reasoning system'
      ]
    },
    {
      title: 'Image Generation',
      icon: <FaPalette />,
      items: [
        'Local via ComfyUI, Fooocus, and GGUF models (optional GPU required)',
        'API integrations: OpenAI DALL·E, xAI, Stability AI, etc.',
        'Future support for iGPU/NPU acceleration'
      ]
    },
    {
      title: 'Voice & Audio',
      icon: <FaMicrophoneAlt />,
      items: [
        'Faster-Whisper – real-time transcription (OpenAI STT-compatible)',
        'Kokoro – voice-to-LLM tool server with diarization & trigger words',
        'Text-to-Speech (TTS) with agent-based voices (optional local setup)'
      ]
    },
    {
      title: 'Automation & Tooling',
      icon: <FaCogs />,
      items: [
        'AI pipelines powered by:',
        'Toolservers',
        'Plugins',
        'Custom Python/JS integrations',
        'Modular orchestration from "The Colonel" (Open Interpreter)',
        'Filesystem Toolserver – structured file access for LLMs'
      ]
    },
    {
      title: 'Dev Tools & Extensibility',
      icon: <FaCode />,
      items: [
        'Docker + Portainer (container orchestration)',
        'Git-backed tool sync via Bolt/MagiCode',
        'Agent APIs (OpenAI-compatible and WebAPI support)',
        'Custom prompt injection, model switching, and role-based agents'
      ]
    },
    {
      title: 'Networking & Security',
      icon: <FaGlobe />,
      items: [
        'Nginx Proxy Manager – reverse proxy & SSL with Let\'s Encrypt',
        'Open-WebUI Security Features:',
        'OAuth-compatible',
        'Role-based access control (RBAC)',
        'Password encryption',
        'Token expiration & refresh handling',
        'Dynamic port/subdomain routing (ideal for LAN & WAN deployment)'
      ]
    }
  ];

  const experimentalFeatures = [
    { feature: 'Direct System Control (Open Interpreter as root agent)', status: '✅' },
    { feature: 'Agent Marketplace (Create & share Unicorn Agents)', status: '🦄 In Progress' },
    { feature: 'Always-on Voice Triggering (via Kokoro)', status: '✅' },
    { feature: 'Graph Reasoning & RAG', status: '✅' },
    { feature: 'MagiCode Low-Code Builder', status: '✅' },
    { feature: 'Self-hosted Video Gen (Mochi-ready)', status: '🧪 Optional' },
    { feature: 'iGPU/NPU Acceleration', status: '🧙‍♂️ Future Update' }
  ];

  const privacyFeatures = [
    'Offline-first, fully local stack',
    'No forced accounts. No tracking. No phoning home.',
    'Optional encrypted storage',
    'You control updates, access, and everything else'
  ];

  const expansionFeatures = [
    'Designed for swappable modules (e.g., add GPU, run new agents)',
    'Auto-launch at boot or on demand',
    'Scale from personal use to enterprise deployments'
  ];

  return (
    <div className="page-container">
      <BackgroundSparkles />
      <PageHeader 
        title="Tech Specs" 
        subtitle="High-Octane AI. Fully Local. Fully Yours."
        backgroundVariant="specs"
      />
      
      <main className="page-content">
        <div className="container">
          <section className="specs-hero-section">
            <motion.p
              className="specs-intro"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Unicorn Commander UC-1 isn't just a machine—it's your personal AI command center, hardwired with open-source superpowers and no strings attached. No subscriptions, no spyware, no Big Tech snooping. Just you, your data, and your unicorn army.
            </motion.p>
          </section>

          <div className="specs-tabs">
            <button 
              className={`tab-button ${activeTab === 'hardware' ? 'active' : ''}`}
              onClick={() => setActiveTab('hardware')}
            >
              <FaMicrochip /> Hardware
            </button>
            <button 
              className={`tab-button ${activeTab === 'software' ? 'active' : ''}`}
              onClick={() => setActiveTab('software')}
            >
              <FaCode /> Software
            </button>
            <button 
              className={`tab-button ${activeTab === 'experimental' ? 'active' : ''}`}
              onClick={() => setActiveTab('experimental')}
            >
              <FaFlask /> Experimental
            </button>
            <button 
              className={`tab-button ${activeTab === 'privacy' ? 'active' : ''}`}
              onClick={() => setActiveTab('privacy')}
            >
              <FaLock /> Privacy
            </button>
            <button 
              className={`tab-button ${activeTab === 'expansion' ? 'active' : ''}`}
              onClick={() => setActiveTab('expansion')}
            >
              <FaBoxOpen /> Expansion
            </button>
          </div>

          {activeTab === 'hardware' && (
            <motion.section 
              className="hardware-specs-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="section-header">
                <h2 className="section-title">
                  <FaMicrochip /> Hardware Specs
                </h2>
                <p className="section-subtitle">Standard UC-1 Build — Upgradable & Modular</p>
              </div>
              
              <div className="specs-table">
                <div className="specs-table-header">
                  <div className="specs-table-cell">Component</div>
                  <div className="specs-table-cell">Description</div>
                </div>
                {hardwareSpecs.map((spec, index) => (
                  <motion.div 
                    className="specs-table-row"
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="specs-table-cell component">
                      <span className="component-icon">{spec.icon}</span>
                      <span>{spec.component}</span>
                    </div>
                    <div className="specs-table-cell">{spec.description}</div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {activeTab === 'software' && (
            <motion.section 
              className="software-specs-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="section-header">
                <h2 className="section-title">
                  <FaCode /> Software Stack
                </h2>
                <p className="section-subtitle">Everything runs locally out of the box. Modular. Expandable. Unicornized.</p>
              </div>
              
              <div className="software-categories">
                {softwareCategories.map((category, index) => (
                  <motion.div 
                    className="software-category"
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="category-header">
                      <div className="category-icon">{category.icon}</div>
                      <h3>{category.title}</h3>
                    </div>
                    <ul className="category-items">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {activeTab === 'experimental' && (
            <motion.section 
              className="experimental-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="section-header">
                <h2 className="section-title">
                  <FaFlask /> Experimental Magic
                </h2>
                <p className="section-subtitle">Cutting-edge features pushing the boundaries of what's possible</p>
              </div>
              
              <div className="experimental-table">
                <div className="experimental-table-header">
                  <div className="experimental-table-cell">Feature</div>
                  <div className="experimental-table-cell">Status</div>
                </div>
                {experimentalFeatures.map((feature, index) => (
                  <motion.div 
                    className="experimental-table-row"
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="experimental-table-cell">{feature.feature}</div>
                    <div className="experimental-table-cell status">{feature.status}</div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {activeTab === 'privacy' && (
            <motion.section 
              className="privacy-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="section-header">
                <h2 className="section-title">
                  <FaLock /> Privacy by Design
                </h2>
                <p className="section-subtitle">Your data stays with you—always</p>
              </div>
              
              <div className="privacy-features">
                {privacyFeatures.map((feature, index) => (
                  <motion.div 
                    className="privacy-feature"
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="feature-icon">
                      <FaLock />
                    </div>
                    <p>{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {activeTab === 'expansion' && (
            <motion.section 
              className="expansion-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="section-header">
                <h2 className="section-title">
                  <FaBoxOpen /> Expansion Ready
                </h2>
                <p className="section-subtitle">Grow and adapt as your needs evolve</p>
              </div>
              
              <div className="expansion-features">
                {expansionFeatures.map((feature, index) => (
                  <motion.div 
                    className="expansion-feature"
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="feature-icon">
                      <FaBoxOpen />
                    </div>
                    <p>{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          <section className="cta-section">
            <motion.div
              className="cta-container"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Ready to Unleash Your AI Potential?</h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Experience the future of AI with Unicorn Commander UC-1. Powerful, private, and built for innovators.
              </motion.p>
              <motion.div
                className="cta-buttons"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <a 
                  href="https://buy.stripe.com/cNi5kDf0h0n45K2cHk18c00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button primary"
                >
                  Order UC-1 - $1500
                </a>
              </motion.div>
            </motion.div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Specs;
