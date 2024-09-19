import React from 'react';
import TestVisionAILogo from '../assets/TestVisionAILogo.png';

const Sign = () => {
  return (
    <div className="bg-gray-900 h-screen flex justify-center items-center">
      {/* Container for the whole card */}
      <div className="bg-gray-900 text-white flex rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        
        {/* Left Section */}
        <div className="bg-gray-800 p-10 flex flex-col justify-center items-start w-1/2">
          {/* Logo */}
          <div className="flex items-center justify-center">
          <img src={TestVisionAILogo} alt="TestVisionAI Logo" className="w-auto h-auto object-contain" />
          </div>
          
          {/* Subheading and Description */}
          <h2 className="text-4xl font-semibold mt-10">Get Started now for <span className="text-green-500">Free</span></h2>
          <p className="text-white-400  mt-4">
            TestVisionAI is here to transform the way you approach product testing.
            Sign in today and see the difference AI-powered test case generation can make!
          </p>
          
          {/* Checkout Button */}
          <button className="mt-8 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
            Checkout Features First
          </button>
        </div>
        
        {/* Right Section with Form */}
        <div className="bg-white p-10 w-1/2 flex flex-col justify-center items-center">
          {/* Heading */}
          <h1 className="text-black text-3xl font-bold mb-4">Sign in</h1>

          {/* Work email input */}
          <div className="w-full mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Work email <span className="text-red-500">*</span>
            </label>
            <input 
              type="email" 
              placeholder="name@company.com" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password input */}
          <div className="w-full mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password <span className="text-red-500">*</span>
            </label>
            <input 
              type="password" 
              placeholder="Enter Password" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="text-right mt-1">
              <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
            </div>
          </div>

          {/* Sign In Button */}
          <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition mb-4">
            Sign in
          </button>

          {/* OR Divider */}
          <div className="flex items-center justify-between w-full mb-4">
            <hr className="w-full border-t border-gray-300" />
            <span className="text-gray-500 px-2">OR</span>
            <hr className="w-full border-t border-gray-300" />
          </div>

          {/* Sign In with Google and GitHub */}
          <div className="flex w-full justify-between mb-4">
            <button className="flex items-center justify-center w-1/2 bg-white border border-gray-300 text-black px-4 py-3 rounded-full mr-2 hover:bg-gray-100 transition">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="Google" className="h-6 w-6 mr-2" />
              Google
            </button>
            <button className="flex items-center justify-center w-1/2 bg-black text-white px-4 py-3 rounded-full ml-2 hover:bg-gray-800 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.168c-3.338.727-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.087-.743.083-.728.083-.728 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.931 0-1.31.47-2.381 1.236-3.221-.123-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.005-.404 1.022.005 2.048.138 3.005.404 2.292-1.552 3.299-1.23 3.299-1.23.653 1.653.241 2.874.118 3.176.768.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.624-5.475 5.921.43.37.815 1.102.815 2.222v3.293c0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" clipRule="evenodd"/>
              </svg>
              Github
            </button>
          </div>

          {/* Sign In with SSO */}
          <button className="flex items-center justify-center w-full bg-white border border-gray-300 text-black px-6 py-3 rounded-full hover:bg-gray-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            Sign in with SSO
          </button>

          {/* Footer */}
          <div className="mt-6">
            <p className="text-sm text-gray-500">
              Don't have an account? <a href="#" className="text-blue-500 hover:underline">Join Free Today</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
