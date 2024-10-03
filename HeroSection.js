// src/components/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex-1 bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Welcome to Our Website
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          We provide the best solutions for your business needs.
        </p>
        <div className="mt-8">
          <a href="#" className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
