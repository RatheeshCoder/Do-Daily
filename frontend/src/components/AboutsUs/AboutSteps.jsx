import React from "react";
import { AboutSteps } from "../../Data/data";

const Aboutsteps = () => {
  return (
    <div className="flex flex-col justify-between max-w-screen-lg px-4 mx-auto sm:px-6 lg:px-8">

      <div className="text-center">
        <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
          STEPS
        </p>
        <h3 className="text-3xl font-extrabold leading-normal tracking-tight text-gray-900 sm:text-5xl">
          How it <span className="text-indigo-600">Works?</span>
        </h3>
      </div>

      <div className="mt-20">
        <ul className="md:grid md:grid-cols-3 md:col-gap-10 md:row-gap-10">
          {AboutSteps.map((step) => (
            <li key={step.number} className="p-5 pb-10 text-center bg-gray-100 ">
              <div className="flex flex-col items-center">
                <div className="relative top-0 flex-shrink-0 -mt-16">
                  <div
                    className="flex items-center justify-center w-20 h-20 text-xl font-semibold text-white bg-indigo-500 border-4 border-white rounded-full"
                  >
                    {step.number}
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold leading-6 text-gray-900">
                    {step.headline}
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    {step.content}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Aboutsteps;
