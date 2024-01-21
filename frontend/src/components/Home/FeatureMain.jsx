import React from 'react'
import { Feature } from "../../Data/data";

const FeatureMain = () => {
  return (
    <section className="relative py-10 my-10 overflow-hidden">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="mb-16 text-center">
                <p class="mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">Our Features

                </p>
            </div>
        <ul
          role="list"
          className="grid max-w-2xl grid-cols-1 gap-6 mx-auto mt-16 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-2"
        >
          {Feature.map((item, index) => (
            <li key={index} className="p-8 border border-gray-200 rounded-2xl">
              <h3 className="flex items-center text-lg font-bold text-gray-900">
                <span>
                  <img src={item.icon} alt={item.title} className="w-[36px] mr-2" />
                </span>
                {item.title}
              </h3>
              <p className="mt-6 text-base text-gray-700">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeatureMain;
