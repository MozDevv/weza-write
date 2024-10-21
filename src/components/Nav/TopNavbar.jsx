/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import Sidebar from '../Nav/Sidebar';
import Backdrop from '@mui/material/Backdrop'; // Import MUI Backdrop
import CircularProgress from '@mui/material/CircularProgress'; // Import MUI Circular Progress
import LogoIcon from '../../assets/svg/Logo';
import BurgerIcon from '../../assets/svg/BurgerIcon';

export default function TopNavbar() {
  const [y, setY] = useState(0);
  const [sidebarOpen, toggleSidebar] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const handleScroll = () => {
      setY(window.scrollY);
    };

    setY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    // Simulate loading with a timeout (you can replace this with actual loading logic)
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after the content has loaded
      setIsMounted(true); // Now set the mounted state
    }, 100); // Adjust the duration as needed

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer); // Cleanup timer
    };
  }, []);

  return (
    <div className="w-full">
      {/* MUI Backdrop with CircularProgress Spinner */}

      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      {sidebarOpen ? (
        <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      ) : (
        !loading && ( // Only show the navbar when not loading
          <Wrapper
            className="flexCenter animate whiteBg"
            style={y > 100 ? { height: '60px' } : { height: '80px' }}
          >
            <NavInner className="container flexSpaceCenter w-[200px]">
              <Link className="pointer flexNullCenter" to="home" smooth={true}>
                <img
                  src="/logo2.png"
                  alt=""
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginRight: '10px',
                    transform: 'scale(0.7)',
                    transition: 'transform 0.2s ease-in-out',
                  }}
                />
                <img
                  src="/logo.png"
                  alt=""
                  height={70}
                  width={160}
                  className="ml-[-25px]"
                />
              </Link>

              <BurgerWrapper
                className="pointer"
                onClick={() => toggleSidebar(!sidebarOpen)}
              >
                <BurgerIcon />
              </BurgerWrapper>

              <UlWrapper className="flexNullCenter">
                <li className="semiBold font15 pointer">
                  <Link
                    activeClass="active"
                    style={{ padding: '10px 15px' }}
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    Home
                  </Link>
                </li>
                <li className="semiBold font15 pointer">
                  <Link
                    activeClass="active"
                    style={{ padding: '10px 15px' }}
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    Services
                  </Link>
                </li>
                <li className="semiBold font15 pointer">
                  <Link
                    activeClass="active"
                    style={{ padding: '10px 15px' }}
                    to="testimonials"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    Testimonials
                  </Link>
                </li>
                <li className="semiBold font15 pointer">
                  <Link
                    activeClass="active"
                    style={{ padding: '10px 15px' }}
                    to="blog"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    How it Works
                  </Link>
                </li>

                <li className="semiBold font15 pointer">
                  <Link
                    activeClass="active"
                    style={{ padding: '10px 15px' }}
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    Contact
                  </Link>
                </li>
              </UlWrapper>
              <UlWrapperRight className="flexNullCenter">
                <li className="semiBold font15 pointer">
                  <a href="/" style={{ padding: '10px 30px 10px 0' }}>
                    Log in
                  </a>
                </li>
                <li className="semiBold font15 pointer flexCenter">
                  <a
                    href="/"
                    className="radius8 bg-gray-200"
                    style={{ padding: '10px 15px' }}
                  >
                    Get Started
                  </a>
                </li>
              </UlWrapperRight>
            </NavInner>
          </Wrapper>
        )
      )}
    </div>
  );
}

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  z-index: 999;
  overflow: hidden; /* Ensure it does not overflow */
  @media (max-width: 760px) {
    width: 100%;
  }
`;

const NavInner = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Space elements properly */
`;

const BurgerWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;

const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;

const UlWrapperRight = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
