import React from "react";
import Container from "./Container";
import img1 from "../assets/images/work/2.png";
import img2 from "../assets/images/work/1.png";
import img3 from "../assets/images/work/3.png";
import { Outlet, Link } from "react-router-dom";

const data = [
  {
    img: img1,
    bio: [
      { title: "Role", desc: "Head of Product Designer & User Experience" },
      { title: "Project", desc: "Medical Software" },
      {
        title: "Overview",
        desc: "Upgrade the RIS for efficient clinic workflow.",
      },
    ],
  },
  {
    img: img2,
    bio: [
      { title: "Role", desc: "Sr. Software UX Architect" },
      { title: "Project", desc: "Software for Gas Pipelines" },
      {
        title: "Overview",
        desc: "User centered software for scheduling, managing and invoicing transportation of natural gas.",
      },
    ],
  },
  {
    img: img3,
    bio: [
      {
        title: "Role",
        desc: "Lead Software Engineer,Product manager, Ux Architect",
      },
      { title: "Project", desc: "Golf Championship Scoring system" },
      {
        title: "Overview",
        desc: "software to manage golf players, pairings, live scoring, statistics, and data feeds for broadcasting partners during major golf championships.",
      },
    ],
  },
];

const Work = () => {
  return (
    <Container title={"Projects"}>
      <Link to={"project"}>
        <div className="flex flex-wrap">
          {data.map((item, index) => (
            <div className="flex flex-wrap py-[30px] md:p-[30px] boder">
              <img
                src={item.img}
                alt=""
                className="xl:w-[49.998%] object-contain"
              />
              <div className="xl:max-w-[49.998%] w-full py-[30px] md:p-[30px] boder-l">
                {item.bio.map((item, index) => (
                  <p className="w-full py-[11px] boder last:after:!h-0 text-[14px] md:!text-[16px]">
                    <strong className="p-[1px_8px] mr-[8px] bg-[#a1c568] rounded-sm h-fit text-[#202020]">
                      {item.title}:
                    </strong>{" "}
                    <span className="text-[16px]">{item.desc}</span>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Link>
    </Container>
  );
};

export default Work;
