import React from 'react';

const services = [
  {
    title: 'General Consultation',
    description: 'Routine check-ups and medical advice from our experienced doctors.',
  },
  {
    title: 'Specialist Referrals',
    description: 'Get referred to top specialists in various medical fields.',
  },
  {
    title: 'Laboratory Tests',
    description: 'On-site lab tests with quick and accurate results.',
  },
];

const Services: React.FC = () => {
  return (
    <section className="p-10 bg-[#ebeef1] h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-700">Our Services</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl p-6 shadow-neumorphism hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-gray-700">{service.title}</h3>
              <p className="text-gray-500 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
