/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Components
import ServiceBox from '../Elements/ServiceBox';
import { Button } from '@mui/material';

export default function Services() {
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_LENGTH = 150;
  return (
    <Wrapper id="services">
      <div className="whiteBg" style={{ padding: '60px 0' }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="text-[36px] font-extrabold mb-2">Our Services</h1>
            <p className="text-base text-gray-700">
              We deliver tailored solutions, from research to technical support,
              ensuring quality and innovation in every project.
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex flex-row gap-2 mt-8">
            <motion.section
              className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mb-10"
              initial={{ opacity: 0, y: 20 }} // Start off-screen
              whileInView={{ opacity: 1, y: 0 }} // Animate to end position
              viewport={{ once: false }} // Allow multiple triggers
            >
              {[
                {
                  title: 'Research Services',
                  icon: '/1.png',
                  subtitle:
                    'Our research services offer thorough analysis and comprehensive insights tailored to your needs, enabling data-driven decision-making. Whether it’s market research, competitor analysis, or industry trends, we provide actionable information to support your strategic planning and business growth.',
                },
                {
                  title: 'Technical Support',
                  icon: '/4.png',
                  subtitle:
                    'Our technical support team is available around the clock to ensure your systems remain operational and efficient. We provide solutions to technical issues, troubleshoot problems, and offer guidance on system optimization, minimizing disruptions and keeping your business running seamlessly.',
                },
                {
                  title: 'Copy Writing',
                  icon: '/2.png',
                  subtitle:
                    'Our copywriting services create compelling and engaging content tailored to your audience. From web copy to marketing materials, our professional writers craft messages that not only capture attention but also communicate your brand’s value, boosting engagement and driving conversions.',
                },
              ].map((service, index) => {
                // Function to truncate subtitle
                const truncatedSubtitle = (subtitle) => {
                  if (isExpanded) return subtitle;
                  return subtitle.length > MAX_LENGTH
                    ? subtitle.slice(0, MAX_LENGTH) + '...'
                    : subtitle;
                };

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }} // Start off-screen
                    whileInView={{ opacity: 1, y: 0 }} // Animate to end position
                    transition={{ duration: 0.5, delay: index * 0.25 }} // Stagger delay
                    className="h-[350px] p-6  rounded-lg text-center bg-white  transition-shadow duration-300"
                  >
                    <div className="flex flex-col gap-6 items-center">
                      {/* Service Icon */}
                      <div className=" p-4 bg-white  flex items-center justify-center w-36 h-40 mb-4">
                        <img
                          src={service.icon}
                          alt={service.title}
                          className="w-full h-full"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>

                      {/* Service Title */}
                      <h3 className="text-lg font-semibold text-gray-800">
                        {service.title}
                      </h3>

                      {/* Divider */}
                      <div className="w-20 h-2 bg-gray-300 rounded-md mb-2"></div>

                      {/* Service Subtitle */}
                      <p className="text-gray-600 text-sm">
                        {truncatedSubtitle(service.subtitle)}
                      </p>

                      {/* Read More Button */}
                      {/* <Button
                        variant="text"
                        color="primary"
                        // onClick={() => setIsExpanded(!isExpanded)}
                      >
                        {isExpanded ? 'Read Less' : 'Read More'}
                      </Button> */}
                    </div>
                  </motion.div>
                );
              })}
            </motion.section>
          </ServiceBoxRow>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;

const HeaderInfo = styled.div`
  text-align: center;
`;
