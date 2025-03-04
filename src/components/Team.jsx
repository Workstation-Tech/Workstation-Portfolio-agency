import React, { useEffect } from "react";
import team1 from "../img/team/team-1.jpg";
import team2 from "../img/team/team-2.jpg";
import team3 from "../img/team/team-3.jpg";
import team4 from "../img/team/team-4.jpg";
// aos
import AOS from "aos";
import "aos/dist/aos.css";

// custom styles
import "./Team.css";
import TeamImage from "./TeamImage";

const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="text-[#7A6960]">
      <h1 data-aos="fade-right" className="text-3xl font-semibold text-center">
        Team
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
      To empower businesses with cutting-edge digital solutions, enhancing their online presence and driving sustainable growth through innovation and creativity.

      </p>

      <div className="flex flex-col xs:flex-row gap-6 p-5 lg:p-0 items-center">
        <TeamImage image={team1} name={"Avirup Ghosh"} role={"Cheif Executive Officer"} />
        <TeamImage image={team2} name={"Niloy Das"} role={"Managing Director"} />
        <TeamImage image={team3} name={"Monojit Das"} role={"Developer"} />
        <TeamImage image={team4} name={"Sandipan Rakhit"} role={"Developer"} />
      </div>
    </div>
  );
};

export default Team;
