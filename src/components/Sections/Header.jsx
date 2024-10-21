import React from 'react';
import { Button } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import styled from 'styled-components';

export default function Header() {
  const [hovered, setHovered] = React.useState(false);
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60 font-montserrat">
            Elevate Your Writing with Expert Support.
          </h1>
          <HeaderP
            className="font13 semiBold text-xl font-montserrat"
            style={{
              color: 'gray',
            }}
          >
            Our comprehensive writing services include personalized tutoring,
            engaging copywriting, and professional editing. Whether you’re
            looking to improve your writing skills or need help with a project,
            we’re here to help.
          </HeaderP>
          <ButtonWrapper>
            <Button
              variant="contained"
              size="large"
              sx={{
                minWidth: '200px',
                minHeight: '48px',
                borderRadius: '25px',
                transition: 'all 0.3s ease',
                width: hovered ? '200px' : '180px',
                textTransform: 'none',
                transform: hovered ? 'scale(1.05)' : 'scale(1)',
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              endIcon={
                <ArrowForwardIos
                  fontSize="small"
                  sx={{
                    fontSize: '13px !important',
                    marginLeft: '8px',
                    transition: 'opacity 0.3s ease',
                    opacity: hovered ? 1 : 0,
                  }}
                />
              }
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderRadius: '25px',
                minWidth: '200px',
                minHeight: '48px',
                textTransform: 'none',
              }}
              size="large"
            >
              Hire a Tutor
            </Button>
          </ButtonWrapper>
        </div>
      </LeftSide>
      <RightSide className="hidden md:block">
        <VideoWrapper>
          <Video src="/weza 9.mp4" autoPlay loop muted playsInline />
        </VideoWrapper>
      </RightSide>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 70px;
  width: 100%;
  min-height: 740px;
  display: flex;
  @media (max-width: 960px) {
    flex-direction: column;
    padding-top: 40px;
  }
`;

const LeftSide = styled.div`
  width: 50%;
  height: 90%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;

const RightSide = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;

const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  @media (max-width: 560px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
  margin-right: 20px;
  margin-bottom: 20px;
`;
