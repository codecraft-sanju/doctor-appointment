import React from 'react';
import { Link } from 'react-router-dom';

const doctors = [
  {
    name: 'Dr. John Doe',
    specialty: 'Cardiologist',
    rating: 4.9,
  },
  {
    name: 'Dr. Jane Smith',
    specialty: 'Dermatologist',
    rating: 4.7,
  },
  {
    name: 'Dr. Jane Smith',
    specialty: 'Dermatologist',
    rating: 4.7,
  },
  {
    name: 'Dr. Jane Smith',
    specialty: 'Dermatologist',
    rating: 4.7,
  },
  {
    name: 'Dr. Jane Smith',
    specialty: 'Dermatologist',
    rating: 4.7,
  },
  {
    name: 'Dr. Jane Smith',
    specialty: 'Dermatologist',
    rating: 4.7,
  },
  
];

const Doctors: React.FC = () => {
  return (
    <section className="p-10 mt-12 bg-[#ebeef1] ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-700">Our Doctors</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-3xl p-6 shadow-neumorphism hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-gray-700">{doctor.name}</h3>
              <p className="text-gray-500">{doctor.specialty}</p>
              <p className="text-yellow-500">⭐ {doctor.rating}</p>
              <Link to="/appointments">
              <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full neumorphism-btn hover:bg-blue-600">
               Book Appointment
              </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
