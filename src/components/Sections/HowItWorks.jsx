import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function HowItWorks() {
  const steps = [
    {
      title: 'Discovery and Engagement',
      icon: '/1.mp4',
      subtitle:
        'Clients discover our services through various channels, such as search engines, ads, or referrals. They submit their writing or tutoring needs via forms, providing details like the type of service, project specifics, deadlines, and any special requests. We also offer the option to create a client account for tracking project status, interacting with writers/tutors, and viewing billing details.',
    },
    {
      title: 'Project Matching',
      icon: '/2.mp4',
      subtitle:
        'Our team reviews submitted projects and matches them with vetted writers or tutors based on their expertise, availability, and the client’s budget. After this review, clients receive a customized quote tailored to their project requirements, ensuring transparency and understanding from the outset.',
    },
    {
      title: 'Onboarding of Writers/Tutors',
      icon: '/3.mp4',
      subtitle:
        'Writers and tutors apply through our website by submitting their credentials, portfolios, and references. We thoroughly vet their qualifications and past work to ensure they are suitable for various projects. Once approved, they are onboarded to our system and matched with clients based on their specialization and experience, ensuring the best fit for project needs.',
    },
    {
      title: 'Complete Project Lifecycle',
      icon: '/4.mp4',
      subtitle:
        'Throughout the project lifecycle, clients can track progress, communicate with their assigned writers or tutors, and receive timely updates. Upon completion, the final product is delivered through our platform, allowing clients to review and request revisions if necessary. After project delivery, clients can provide feedback and ratings, fostering a continuous improvement loop for our services.',
    },
  ];
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

  return (
    <div id="blog" className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-8 mt-8">
        How It Works
      </h2>
      <p className="text-base md:text-lg text-center text-gray-600 mb-8">
        Discover the simple steps from initial inquiry to final delivery.
      </p>

      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            x: isMobile ? 0 : index % 2 === 0 ? 100 : -100,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{
            opacity: 0,
            x: isMobile ? 0 : index % 2 === 0 ? 100 : -100,
          }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="flex flex-col md:flex-row items-center mb-8" // Responsive adjustments
        >
          {index % 2 === 0 ? (
            <div className="flex flex-col md:flex-row items-center md:items-start bg-white rounded-lg p-4 w-full gap-4">
              <div className="flex-1 hidden md:flex justify-center">
                <video
                  src={step.icon}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full md:w-[300px] h-[200px] md:h-[350px] object-cover"
                />
              </div>
              <div className="flex flex-col flex-1 gap-3 text-center md:text-left">
                <div className="text-lg font-semibold text-gray-800 flex items-center justify-center md:justify-start gap-2">
                  <div className="rounded-full w-10 h-10 bg-tertiary flex items-center justify-center text-white">
                    {index + 1}
                  </div>
                  {step.title}
                </div>
                <p className="text-gray-600 text-sm">{step.subtitle}</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row items-center md:items-start bg-white rounded-lg p-4 w-full gap-4">
              <div className="flex flex-col flex-1 gap-3 text-center md:text-left">
                <div className="text-lg font-semibold text-gray-800 flex items-center justify-center md:justify-start gap-2">
                  <div className="rounded-full w-10 h-10 bg-tertiary flex items-center justify-center text-white">
                    {index + 1}
                  </div>
                  {step.title}
                </div>
                <p className="text-gray-600 text-sm">{step.subtitle}</p>
              </div>
              <div className="flex-1 hidden md:flex justify-center">
                <video
                  src={step.icon}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full md:w-[300px] h-[200px] md:h-[400px] object-cover"
                />
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default HowItWorks;
