import React from 'react';

const Projects = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative px-4 mx-auto max-w-7xl sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 font sm:text-6xl">Svelte signals are finally here</h1>
            <p className="mt-4 text-xl text-gray-500">This year, our new svelte signals will shelter you from the harsh
              elements of a world that doesn't care if you develop or die.</p>
          </div>
          <div>
            <div className="mt-10 mb-20">
              {/* Decorative image grid */}
              <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 overflow-hidden rounded-lg w-44 sm:opacity-0 lg:opacity-100">
                        <img src="https://placekitten.com/g/200/300" className="object-cover object-center w-full h-full" alt="Kitten" />
                      </div>
                      <div className="h-64 overflow-hidden rounded-lg w-44">
                        <img src="https://placekeanu.com/200/300" alt="Keanu" className="object-cover object-center w-full h-full" />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 overflow-hidden rounded-lg w-44">
                        <img src="https://placekeanu.com/684/350/" alt="Keanu" className="object-cover object-center w-full h-full" />
                      </div>
                      <div className="h-64 overflow-hidden rounded-lg w-44">
                        <img src="https://placekeanu.com/250/350/y" alt="Keanu" className="object-cover object-center w-full h-full" />
                      </div>
                      <div className="h-64 overflow-hidden rounded-lg w-44">
                        <img src="https://placekitten.com/g/200/300" alt="Kitten" className="object-cover object-center w-full h-full" />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 overflow-hidden rounded-lg w-44">
                        <img src="https://placekeanu.com/684/350/y" alt="Keanu" className="object-cover object-center w-full h-full" />
                      </div>
                      <div className="h-64 overflow-hidden rounded-lg w-44">
                        <img src="https://placebear.com/684/350" alt="Bear" className="object-cover object-center w-full h-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a href="#" className="inline-block px-8 py-3 font-medium text-center text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700">Svelte Signals</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
