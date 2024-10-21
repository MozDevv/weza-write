import React, { useState, useEffect } from 'react';
import HowItWorksMobile from './HowItWorks copy';
import HowItWorks from './HowItWorks';

function HowItWorksContainer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is available (only on the client-side)
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 640);
      };

      // Set initial state based on current window size
      handleResize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  // Render either the mobile or desktop version based on screen size
  return isMobile ? <HowItWorksMobile /> : <HowItWorks />;
}

export default HowItWorksContainer;
