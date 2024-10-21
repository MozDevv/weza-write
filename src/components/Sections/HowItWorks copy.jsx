import React from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Paper,
  Typography,
} from '@mui/material';
import styled from 'styled-components';

// Styled component for the section background
const BackgroundSection = styled.div`
  background-size: cover;
  background-position: center;
  position: relative;
  padding: 2rem 0;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(
    255,
    255,
    255,
    0.6
  ); // Whitish overlay with low opacity
`;
const CustomStepIcon = ({ icon }) => (
  <div
    style={{
      backgroundColor: '#1976d2',
      color: '#fff',
      borderRadius: '50%',
      width: '30px',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '16px',
    }}
  >
    {icon}
  </div>
);

function HowItWorksMobile() {
  const steps = [
    {
      title: 'Discovery and Engagement',
      subtitle:
        'Clients discover our services through various channels, such as search engines, ads, or referrals. They submit their writing or tutoring needs via forms, providing details like the type of service, project specifics, deadlines, and any special requests. We also offer the option to create a client account for tracking project status, interacting with writers/tutors, and viewing billing details.',
    },
    {
      title: 'Project Matching',
      subtitle:
        'Our team reviews submitted projects and matches them with vetted writers or tutors based on their expertise, availability, and the client’s budget. After this review, clients receive a customized quote tailored to their project requirements, ensuring transparency and understanding from the outset.',
    },
    {
      title: 'Onboarding of Writers/Tutors',
      subtitle:
        'Writers and tutors apply through our website by submitting their credentials, portfolios, and references. We thoroughly vet their qualifications and past work to ensure they are suitable for various projects. Once approved, they are onboarded to our system and matched with clients based on their specialization and experience, ensuring the best fit for project needs.',
    },
    {
      title: 'Complete Project Lifecycle',
      subtitle:
        'Throughout the project lifecycle, clients can track progress, communicate with their assigned writers or tutors, and receive timely updates. Upon completion, the final product is delivered through our platform, allowing clients to review and request revisions if necessary. After project delivery, clients can provide feedback and ratings, fostering a continuous improvement loop for our services.',
    },
  ];

  return (
    <BackgroundSection>
      <Overlay />
      <div id="blog" className="container relative mx-auto px-4 z-10">
        <h2 className="text-[36px] font-semibold text-center text-gray-800 mb-8 mt-8">
          How It Works
        </h2>
        <p className="text-lg text-center text-gray-600 mb-8">
          Discover the simple steps from initial inquiry to final delivery.
        </p>
        <Stepper orientation="vertical">
          {steps.map((step, index) => (
            <Step key={index} active>
              <StepLabel
                StepIconComponent={(props) => <CustomStepIcon {...props} />}
                sx={{
                  '& .MuiStepLabel-label': {
                    color: 'text.primary',
                    fontWeight: 'bold',
                  },
                }}
              >
                <Typography variant="h6" color="primary">
                  {step.title}
                </Typography>
              </StepLabel>
              <StepContent>
                <Typography variant="body2" className="text-gray-600">
                  {step.subtitle}
                </Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </div>
    </BackgroundSection>
  );
}

export default HowItWorksMobile;
