import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS library

const Appointments: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    doctor: '',
    date: '',
    time: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Your EmailJS credentials
    const userID = 'X5Yc_2-v3L4V2N4an';  // Replace with your EmailJS user ID
    const serviceID = 'service_p2u1m8l';  // Replace with your EmailJS service ID
    const templateID = 'template_ats4dbs';  // Replace with your EmailJS template ID

    try {
      // Sending the form data to EmailJS
      const result = await emailjs.send(
        serviceID,
        templateID,
        formData, // Form data to send as the template's parameters
        userID // EmailJS user ID
      );

      console.log('Email sent successfully:', result.text);
      alert('Appointment successfully booked!');
      setFormData({
        name: '',
        doctor: '',
        date: '',
        time: '',
      }); // Clear the form after submission
    } catch (error) {
      console.error('Email sending error:', error);
      alert('There was an error booking the appointment.');
    }
  };

  return (
    <section className="p-10 mt-12 bg-[#ebeef1] h-screen">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-neumorphism p-8">
        <h2 className="text-2xl font-semibold text-gray-700">Book an Appointment</h2>

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-3 font-medium">Name</label>
            <input
              placeholder='Your Name'
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-100 rounded-lg shadow-neumorphism"
            />
          </div>

          <div>
            <label htmlFor="doctor" className="block text-gray-700 mb-3 font-medium">Choose Doctor</label>
            <select
              id="doctor"
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-100 rounded-lg shadow-neumorphism"
            >
              <option value="">Select a doctor</option>
              <option value="Dr. John Doe">Dr. John Doe</option>
              <option value="Dr. Jane Smith">Dr. Jane Smith</option>
            </select>
          </div>

          <div>
            <label htmlFor="date" className="block text-gray-700 mb-3 font-medium">Appointment Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-100 rounded-lg shadow-neumorphism"
            />
          </div>

          <div>
            <label htmlFor="time" className="block text-gray-700 mb-3 font-medium">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-100 rounded-lg shadow-neumorphism"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-full neumorphism-btn hover:bg-blue-600"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </section>
  );
};

export default Appointments;
