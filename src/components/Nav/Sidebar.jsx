import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
// Assets
import CloseIcon from '../../assets/svg/CloseIcon';
import LogoIcon from '../../assets/svg/Logo';
import { Button } from '@mui/material';

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper className="animate darkBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <div className="flex">
              {' '}
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
            </div>
          </Link>{' '}
        </div>
        <CloseBtn
          onClick={() => toggleSidebar(!sidebarOpen)}
          className="animate pointer"
        >
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: '10px 15px' }}
            to="home"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Home
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: '10px 15px' }}
            to="services"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Services
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: '10px 15px' }}
            to="projects"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Projects
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: '10px 15px' }}
            to="blog"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Blog
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: '10px 15px' }}
            to="pricing"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Pricing
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: '10px 15px' }}
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Contact
          </Link>
        </li>
      </UlStyle>
      <UlStyle className="flexSpaceCenter">
        <div className="flex flex-col ml-7">
          <li className="semiBold font15 pointer">
            <Button
              sx={{
                textTransform: 'none',
                color: '#fff',
                backgroundColor: '#1976d2',
                padding: '10px 20px',
                borderRadius: '20px',
                '&:hover': {
                  backgroundColor: '#155a9b',
                },
                fontSize: '14px',
                width: '100%',
                maxWidth: '250px',
                margin: '5px auto',
              }}
            >
              Login
            </Button>
          </li>
          <li className="semiBold font15 pointer flexCenter">
            <a
              href="/"
              className="radius8 lightBg"
              style={{
                display: 'block',
                textAlign: 'center',
                padding: '10px 20px',
                backgroundColor: '#1976d2',
                color: '#fff',
                borderRadius: '20px',
                fontSize: '14px',
                textDecoration: 'none',
                width: '100%',
                maxWidth: '250px',
                margin: '5px auto',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = '#155a9b')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = '#1976d2')
              }
            >
              Get Started
            </a>
          </li>
        </div>
      </UlStyle>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 300px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? '0px' : '-400px')};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;
