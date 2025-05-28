import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, alt, className, placeholderColor = '#1a1a1a' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px',
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div 
      ref={imgRef}
      className={`lazy-image-container ${className || ''}`}
      style={{
        backgroundColor: placeholderColor,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {isInView && (
        <>
          <img
            src={src}
            alt={alt}
            className={`lazy-image ${isLoaded ? 'loaded' : ''}`}
            onLoad={handleImageLoad}
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out',
            }}
          />
          {!isLoaded && (
            <div className="lazy-image-placeholder">
              <div className="lazy-image-shimmer"></div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default LazyImage;
