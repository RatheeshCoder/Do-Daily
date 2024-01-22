import React from 'react';

const AboutHero = () => {
  return (
    <div className="px-6 pt-6 pb-6 mx-auto xl:max-w-screen-xl md:pt-12 lg:pb-10 sm:px-6 md:px-8 lg:px-12 xl:pt-24">
      <h1 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-6xl xl:text-7xl">
        Eco-Friendly Reusable Silicone Food Storage Bags
      </h1>
      <div className="prose prose-lg lg:prose-xl xl:prose-2xl">
        These reusable silicone food storage bags are a must-have for
        anyone looking to reduce their environmental impact and save money in the long run.
      </div>
      <div className="flex flex-wrap gap-4 my-4 md:mt-8">
        <a href="#"
          className="inline-block px-4 py-4 text-base font-bold text-white transition duration-150 ease-in-out bg-indigo-600 rounded-md shadow-xl hover:bg-indigo-700 lg:px-8">
          Start Browse
        </a>

        <a href=""
          className="inline-block px-4 py-4 text-base font-bold text-indigo-600 transition duration-150 ease-in-out bg-white rounded-md shadow-xl hover:bg-yellow-200 lg:px-8">
          Our impact
        </a>
      </div>
      <a href="" className="inline-block mt-6 text-lg font-semibold text-indigo-600 lg:text-xl hover:underline">
        <span className="hidden sm:inline">Discover our key features. »</span>
        <span className="inline sm:hidden">Learn more »</span>
      </a>
    </div>
  );
}

export default AboutHero;
