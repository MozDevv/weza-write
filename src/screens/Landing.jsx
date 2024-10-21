'use client';
import React from 'react';
// Sections
import TopNavbar from '../components/Nav/TopNavbar';
import Header from '../components/Sections/Header';
import Services from '../components/Sections/Services';
import Projects from '../components/Sections/Projects';
import Blog from '../components/Sections/Blog';
import Pricing from '../components/Sections/Pricing';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Testimonials from '@/components/Sections/Testimonials';
import HowItWorks from '@/components/Sections/HowItWorks';

import { Backdrop, CircularProgress } from '@mui/material';

export default function Landing() {
  const [loading, setLoading] = React.useState(true); // Loading state

  React.useEffect(() => {
    // Simulate a loading delay, you can replace this with your actual loading logic
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after the content has loaded
    }, 1500); // Adjust the duration as needed

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <>
      {loading ? (
        <Backdrop
          open={loading} // Show backdrop when loading
          style={{ color: '#fff', zIndex: 1000 }} // Ensure it's above everything
        >
          <CircularProgress color="inherit" /> {/* Spinner */}
        </Backdrop>
      ) : (
        <>
          {' '}
          <TopNavbar />
          <Header />
          <Services />
          {/* <Projects /> */}
          <Testimonials />
          <HowItWorks />
          {/* <Pricing />*/}
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}
