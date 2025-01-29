import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="p-10 mt-12 bg-[#ebeef1] ">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-neumorphism p-8">
        <h2 className="text-2xl font-semibold text-gray-700">Contact Us</h2>

        <form className="mt-6 space-y-6">
          <div>
            <label htmlFor="name" className="block font-bold text-gray-700 mb-3 ">Name</label>
            <input
              placeholder='Your Name'
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 bg-gray-100 rounded-lg shadow-neumorphism"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 mb-3 font-bold">Email</label>
            <input
              placeholder='Your Email'
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 bg-gray-100 rounded-lg shadow-neumorphism"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 mb-3 font-bold">Message</label>
            <textarea
              placeholder='Your Message'
              id="message"
              name="message"
              required
              className="w-full px-4 py-2 bg-gray-100 rounded-lg shadow-neumorphism"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-full neumorphism-btn hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
