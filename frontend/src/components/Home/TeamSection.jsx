// TeamSection.js
import React from 'react';
import { teamMembers } from '../../Data/data';

const TeamSection = () => {
  return (
    <div className="bg-white py-14">
      <div className="flex flex-col justify-between max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 sm:flex-row">
        
        {/* Team Members Section */}
        <div className="order-last sm:w-6/12 sm:order-first">
          <ul className="grid grid-cols-2 row-gap-5 col-gap-5 md:col-gap-10 md:row-gap-10">
            {teamMembers.map((member) => (
              <li key={member.id} className="p-5 py-10 text-center bg-gray-100">
                <div className="flex flex-col items-center">
                  <div className="flex-shrink-0">
                    <a href="#">
                      <img
                        className="w-24 h-24 mx-auto mb-3 rounded-full"
                        src={member.imageSrc}
                        alt={`Profile of ${member.name}`}
                      />
                    </a>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold leading-6 text-gray-900 transition duration-500 ease-in-out">
                      <a href="#" className="transition duration-500 ease-in-out hover:text-indigo-600">
                        {member.name}
                      </a>
                    </h4>
                    <p className="text-sm leading-6 text-gray-500 uppercase">{member.jobTitle}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Introduction Section */}
        <div className="order-first mb-10 text-left sm:ml-10 md:ml-24 sm:w-6/12 sm:order-last">
          <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">THE TEAM</p>
          <h3 className="text-3xl font-extrabold leading-normal tracking-tight text-gray-900 sm:text-5xl">
            Meet Our <span className="text-indigo-600">Team</span>
          </h3>
          <p className="mt-4 font-light leading-7 text-gray-500 text-md">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
            iste dolor cupiditate blanditiis ratione.
            <br />
            <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
