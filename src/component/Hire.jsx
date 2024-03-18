import React from "react";
import Container from "./Container";

const data = [
  "Extremely passionate about UX and Product Design",
  "18+ years of User Interaction Experience(UX/UI)",
  "15+ of leading Web-based Software Engineering, and Agile/Scrum Development",
  "3 Years of managing a Team of remote UI Designers and Mentoring a Team of product Managers",
];

const Hire = () => {
  return (
    <Container title={"Why hire Roman?"}>
      <ul>
        {data.map((item, index) => (
          <li
            className="w-full py-[11px] flex justify-between boder last:after:!h-0 text-[14px] md:!text-[16px] before:w-1 before:h-1 before:bg-[#a1c568] before:rounded-full before:absolute before:top-5 before:-left-1 pl-3"
            key={index}
          >
            <span className="text-[16px]">{item}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Hire;
