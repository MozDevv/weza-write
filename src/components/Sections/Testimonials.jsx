import React from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Martinez',
      position: 'College Student, NY',
      feedback:
        'Weza Write has been a lifesaver! Balancing part-time work and college was overwhelming, but their tutoring services helped me manage my assignments better. The personalized support and flexible schedules are perfect for my busy life.',
      image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp',
      rating: 4.5,
    },
    {
      name: 'John Thompson',
      position: 'Small Business Owner, CA',
      feedback:
        'I struggled to create engaging content for my business until I found Weza Write. Their copywriting services helped me revamp my website and newsletters, boosting my brand’s visibility and engagement. The quality and professionalism are unmatched!',
      image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp',
      rating: 5,
    },
    {
      name: 'Angela Reynolds',
      position: 'Corporate Executive, TX',
      feedback:
        'Weza Write provided exceptional technical writing services for my business reports and presentations. Their attention to detail and professionalism ensured that everything was delivered accurately and on time. I highly recommend them for any corporate writing needs!',
      image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp',
      rating: 4.8,
    },
  ];

  // Function to generate stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
      <>
        {Array.from({ length: fullStars }).map((_, index) => (
          <span key={index} className="text-blue-500">
            ★
          </span>
        ))}
        {halfStar && <span className="text-blue-500">☆</span>}
      </>
    );
  };

  return (
    <div id="testimonials" className="py-10 bg-gray-100">
      <div className="flex flex-col items-center text-center mb-10">
        <h3 className="text-[36px] font-bold mb-8">Testimonials</h3>
        <p className="max-w-2xl text-gray-600">
          Hear from our satisfied clients who have experienced our exceptional
          service firsthand. Their stories highlight our commitment to quality
          and customer satisfaction.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 w-80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex justify-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full shadow-md"
                width="100"
                height="100"
              />
            </div>
            <h5 className="font-semibold text-lg">{testimonial.name}</h5>
            <h6 className="text-gray-500 text-sm my-2">
              {testimonial.position}
            </h6>
            <div className="flex justify-center mb-4">
              {renderStars(testimonial.rating)}
            </div>
            <p className="text-gray-700">
              <span className="text-blue-500 mr-2">“</span>
              {testimonial.feedback}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
