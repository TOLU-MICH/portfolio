import React from "react";
import SkillProgress from "./SkillProgress";
import brain from "../assets/images/skills/brain.svg";
import diamond from "../assets/images/skills/diamond.svg";
import Container from "./Container";

const data = [
  { percent: 90, text: "Logo Design" },
  { percent: 70, text: "Web Design" },
  { percent: 85, text: "Illustration" },
  { percent: 95, text: "Photography" },
];

const softSkills = [
  { percent: 90, text: "Sketch" },
  { percent: 80, text: "Adobe Photoshop" },
  { percent: 85, text: "Adobe Illustration" },
  { percent: 60, text: "Figma" },
  { percent: 90, text: "Adobe Xd" },
];

const Skills = () => {
  return (
    <Container title={"Skills"}>
      <div className="md:flex">
        <div className="py-[30px] md:p-[30px] w-full md:max-w-[49.998%]">
          <div className="flex boder items-center pb-4 -mt-4">
            <div className="bg-[#202020] w-[50px] h-[50px] flex justify-center items-center rounded-xl  mr-3">
              <img
                src={brain}
                alt=""
                className="w-[28px] h-[28px] object-contain"
              />
            </div>
            <h3 className="font-bold text-xl text-white uppercase"> DESIGN</h3>
          </div>
          <div className="gap-x-[30px] flex flex-wrap justify-start">
            <SkillProgress data={data} />
          </div>
        </div>
        <div className="py-[30px] md:p-[30px] w-full md:max-w-[49.998%] boder-l">
          <div className="flex boder items-center pb-4 -mt-4">
            <div className="bg-[#202020] w-[50px] h-[50px] flex justify-center items-center rounded-xl  mr-3">
              <img
                src={brain}
                alt=""
                className="w-[28px] h-[28px] object-contain"
              />
            </div>
            <h3 className="font-bold text-xl text-white uppercase">
              {" "}
              software skills
            </h3>
          </div>

          <SkillProgress data={softSkills} linear={true} />
        </div>
      </div>
    </Container>
  );
};

export default Skills;
