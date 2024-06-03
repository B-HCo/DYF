import React, { useState, useEffect } from 'react';


const ParallaxBG = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <section className="parallax-section">
        <img
          src="public/assets/DYFBG.jpg"
          id="bg"
          className="parallax-bg"
          style={{ top: `${scrollPosition * 0.5}px` }}
          alt="Background"
        />
        <img
          src="public/assets/DYFtext.png"
          id="text"
          className="parallax-text"
          style={{ top: `calc(44% + 32px + ${scrollPosition * 0.5}px)` }}
          alt="Text"
        />
        <img
          src="public/assets/Pinapple.png"
          id="fruit"
          className="parallax-bg"
          alt="Pineapple"
        />
      </section>
    </div>
  );
};

export default ParallaxBG;
