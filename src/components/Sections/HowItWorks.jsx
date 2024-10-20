import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

function HowItWorks() {
  const steps = [
    {
      title: 'Discovery and Engagement',
      icon: '/1.mp4', // Update with an appropriate image path
      subtitle:
        'Clients discover our services through various channels, such as search engines, ads, or referrals. They submit their writing or tutoring needs via forms, providing details like the type of service, project specifics, deadlines, and any special requests. We also offer the option to create a client account for tracking project status, interacting with writers/tutors, and viewing billing details.',
    },
    {
      title: 'Project Matching',
      icon: '/2.mp4', // Update with an appropriate image path
      subtitle:
        'Our team reviews submitted projects and matches them with vetted writers or tutors based on their expertise, availability, and the client’s budget. After this review, clients receive a customized quote tailored to their project requirements, ensuring transparency and understanding from the outset.',
    },
    {
      title: 'Onboarding of Writers/Tutors',
      icon: '/3.mp4', // Update with an appropriate image path
      subtitle:
        'Writers and tutors apply through our website by submitting their credentials, portfolios, and references. We thoroughly vet their qualifications and past work to ensure they are suitable for various projects. Once approved, they are onboarded to our system and matched with clients based on their specialization and experience, ensuring the best fit for project needs.',
    },
    {
      title: 'Complete Project Lifecycle',
      icon: '/4.mp4', // Update with an appropriate image path
      subtitle:
        'Throughout the project lifecycle, clients can track progress, communicate with their assigned writers or tutors, and receive timely updates. Upon completion, the final product is delivered through our platform, allowing clients to review and request revisions if necessary. After project delivery, clients can provide feedback and ratings, fostering a continuous improvement loop for our services.',
    },
  ];

  return (
    <div id="blog" className="container mx-auto px-4">
      <h2 className="text-[36px] font-semibold text-center text-gray-800 mb-8 mt-8">
        How It Works
      </h2>
      <p className="text-lg text-center text-gray-600 mb-8">
        Discover the simple steps from initial inquiry to final delivery.
      </p>

      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            x: index % 2 === 0 ? 400 : -400, // Slide from right for even, left for odd
          }}
          whileInView={{ opacity: 1, x: 0 }} // Slide into center
          exit={{
            opacity: 0,
            x: index % 2 === 0 ? 400 : -400, // Slide out the same way
          }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className={`flex flex-col md:flex-row items-center mb-4`} // Change mb-8 to mb-4
        >
          {index % 2 === 0 ? (
            <div className="flex-1 p-4 bg-white rounded-lg flex items-center mb-[-100px]">
              <div className="flex-1 hidden md:block">
                <div className="flex items-center justify-center">
                  <video
                    src={step.icon}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-[300px] h-[400px] object-cover max-w-full max-h-full ml-5 "
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 flex-1">
                <div className="text-lg font-semibold text-gray-800 flex flex-row gap-2 items-center">
                  <div className="rounded-full w-10 h-10 bg-tertiary flex items-center justify-center text-white">
                    {index + 1}
                  </div>
                  {step.title}
                </div>
                <p className="text-gray-600 text-sm ml-10">{step.subtitle}</p>
              </div>
            </div>
          ) : (
            <div className="flex-1 p-4 bg-white rounded-lg flex items-center justify-between  mb-[-100px]">
              <div className="flex flex-col gap-3 flex-1">
                <div className="text-lg font-semibold text-gray-800 flex flex-row gap-2 items-center">
                  <div className="rounded-full w-10 h-10 bg-tertiary flex items-center justify-center text-white">
                    {index + 1}
                  </div>
                  {step.title}
                </div>
                <p className="text-gray-600 text-sm ml-10">{step.subtitle}</p>
              </div>
              <div className="flex-1 hidden md:block">
                <div className="flex items-center justify-center">
                  <video
                    src={step.icon}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-[300px] h-[400px] object-cover max-w-full max-h-full mr-5 "
                  />
                </div>
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default HowItWorks;
