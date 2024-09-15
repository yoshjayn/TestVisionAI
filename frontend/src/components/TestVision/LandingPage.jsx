import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <header className="bg-black text-center p-12">
        <p className="text-3xl text-green-300">Hello</p>

        <div className="text-3xl font-bold">
          {/* Multicolor text effect */}
          <span className="text-red-500">T</span>
          <span className="text-yellow-500">a</span>
          <span className="text-green-500">i</span>
          <span className="text-blue-500">l</span>
          <span className="text-purple-500">w</span>
          <span className="text-orange-500">i</span>
          <span className="text-teal-500">n</span>
          <span className="text-pink-500">d</span>
          <span className='text-white'> CSS is working!</span>
        </div>

        <h1 className="text-5xl font-bold text-white mt-4">Welcome to Test Vision AI</h1>
        <p className="text-lg text-gray-300 mt-2">Your tagline or description goes here.</p>
        <Link to="/test-vision" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition">
          Learn More
        </Link>
      </header>

      <section id="features" className="py-12 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-8">Features</h2>
        <div className="flex flex-wrap justify-around">
          <div className="w-full sm:w-1/3 p-4 bg-white shadow-md rounded-lg m-4">
            <h3 className="text-2xl font-semibold mb-4">Feature 1</h3>
            <p className="text-gray-600">Description of feature 1.</p>
          </div>
          <div className="w-full sm:w-1/3 p-4 bg-white shadow-md rounded-lg m-4">
            <h3 className="text-2xl font-semibold mb-4">Feature 2</h3>
            <p className="text-gray-600">Description of feature 2.</p>
          </div>
          <div className="w-full sm:w-1/3 p-4 bg-white shadow-md rounded-lg m-4">
            <h3 className="text-2xl font-semibold mb-4">Feature 3</h3>
            <p className="text-gray-600">Description of feature 3.</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-200 py-6 text-center">
        <p className="text-sm text-gray-600">© 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
