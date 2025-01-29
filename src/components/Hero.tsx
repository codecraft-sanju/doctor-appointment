import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="flex justify-center items-center h-screen bg-[#ebeef1]">
      <div className="bg-white p-10 rounded-3xl shadow-neumorphism">
        <h1 className="text-4xl font-bold text-gray-700">
          Book Your Doctor Appointment Today
        </h1>
        <p className="mt-4 text-gray-500">
          Easy online booking with top specialists in your area.
        </p>
        <Link to="/appointments">
          <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full neumorphism-btn hover:bg-blue-600">
            Book Appointment
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
