import React, { useState, useEffect } from 'react';

const ParallaxBG = () => {
  const [bgStyle, setBgStyle] = useState({ top: 0 });
  const [moonStyle, setMoonStyle] = useState({ left: 0, top: 0 });
  const [fruitStyle, setFruitStyle] = useState({ top: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      setBgStyle({ top: value + 0.5 });
      setMoonStyle({ left: value * 0.5, top: value * 0.5 });
      setFruitStyle({ top: -value + 0.15});
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ background: 'd8eef3', minHeight: '1500px' }}>
      <section>
        <img src="public/assets/DYFBG.jpg" id="bg" style={{ ...bgStyle, width: '100%', height: '100%', objectFit: 'cover' }} />
        <img src="public/assets/DYFtext.png" id="text" style={{ ...fruitStyle, width: '100%', height: '100%', objectFit: 'cover' }} />
        <img src="public/assets/Pinapple.png" id="fruit" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </section>
    </div>
  );
};

export default ParallaxBG;

