import React, { useState, useEffect } from 'react';

const ParallaxBG = () => {
  const [bgStyle, setBgStyle] = useState({ top: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      const value = window.scrollY;
      setBgStyle({ top: value * 0.5 });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // <div style={{ background: '#d8eef3', minHeight: '1500px', position: 'relative' }}>
    <div>
      <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <img
          src="public/assets/DYFBG.jpg"
          id="bg"
          style={{
            ...bgStyle,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
          }}
          alt="Background"
        />
        <img
          src="public/assets/DYFtext.png"
          id="text"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            position: 'absolute',
            top: `calc(44% + 32px + ${scrollPosition * 0.5}px)`, // Adjust this value for desired speed and position
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
          }}
          alt="Text"
        />
        <img
          src="public/assets/Pinapple.png"
          id="fruit"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 3,
          }}
          alt="Pineapple"
        />
      </section>
    </div>
  );
};

export default ParallaxBG;
