import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import BackgroundSparkles from '../components/BackgroundSparkles';
import { FaCalendar, FaUser, FaTags } from 'react-icons/fa';
import '../styles/Blog.css';

// Correct import path
const LazyImage = lazy(() => import('../components/LazyImage'));

function Blog() {
  const posts = [
    {
      title: "The Future of AI in Business",
      excerpt: "Discover how AI is transforming industries and what it means for your business. From customer service to data analysis, AI is revolutionizing how we work.",
      author: "Jane Smith",
      date: "2024-03-15",
      tags: ["AI", "Business", "Technology"],
      readTime: "5 min read",
      image: "https://placehold.co/600x400/1a1a1a/cccccc"
    },
    // ... other posts
  ];

  return (
    <div className="page-container">
      <BackgroundSparkles />
      <PageHeader 
        title="Blog" 
        subtitle="Insights from our magical realm"
      />
      
      <main className="page-content">
        <div className="container">
          <div className="blog-grid">
            {posts.map((post, index) => (
              <motion.article
                key={index}
                className="blog-card card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="blog-image">
                  <Suspense fallback={<div>Loading...</div>}>
                    <LazyImage src={post.image} alt={post.title} />
                  </Suspense>
                </div>
                <div className="blog-content">
                  <h3>{post.title}</h3>
                  <div className="blog-meta">
                    <span><FaCalendar /> {post.date}</span>
                    <span><FaUser /> {post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <p>{post.excerpt}</p>
                  <div className="tags">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">
                        <FaTags /> {tag}
                      </span>
                    ))}
                  </div>
                  <motion.button 
                    className="btn btn-primary read-more"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read More
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Blog;
