import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
// Components
import Sidebar from '../Nav/Sidebar';
import Backdrop from '../Elements/Backdrop';
// Assets
import LogoIcon from '../../assets/svg/Logo';
import BurgerIcon from '../../assets/svg/BurgerIcon';

export default function TopNavbar() {
  const [y, setY] = useState(0);
  const [sidebarOpen, toggleSidebar] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setY(window.scrollY);
    };

    setY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    setIsMounted(true);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isMounted && (
        <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      )}
      {isMounted && sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate whiteBg "
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

          {isMounted && (
            <BurgerWrapper
              className="pointer"
              onClick={() => toggleSidebar(!sidebarOpen)}
            >
              <BurgerIcon />
            </BurgerWrapper>
          )}
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
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  overflow: hidden; /* Ensure it does not overflow */
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
    position: absolute;
    right: 0;
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
