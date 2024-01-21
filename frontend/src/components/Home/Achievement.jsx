import React from "react";
import achievementsData from "../../Data/data";

const AchievementsSection = () => {
  return (
    <section className="flex flex-col mt-20">
      <p className="text-2xl font-semibold text-center md:text-3xl">Our Outstanding Achievements</p>
      <div className="grid w-full grid-cols-2 px-5 mx-auto mt-10 lg:grid-cols-4 gap-y-5 lg:gap-y-0 gap-x-5 place-items-center max-w-7xl">
        {achievementsData.map((achievement) => (
          <div
            key={achievement.id}
            className="flex flex-col justify-center items-center bg-[#B4E9FF] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center"
          >
            <div className="flex flex-row items-center justify-center">
              <img
                className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
                src={achievement.iconPath} // Replace with the actual path for your achievement image
                alt="Achievement Icon"
              />
              <p className="ml-2 text-3xl font-bold leading-9 sm:text-4xl lg:text-5xl text-primary">
                {achievement.value}
              </p>
            </div>
            <p className="mt-3 text-base font-medium leading-6 text-center sm:text-lg md:mt-6">
              {achievement.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
