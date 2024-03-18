import React from "react";
import Container from "./Container";

const data = [
  "Head of the product Design & Ux",
  "18+ year of User Interaction Experience",
  "15+ years of leading Web-Based Software Engineering, and Agile/Scrum Development",
  "4 year of Managing a Team of Remote UI Designers and Mentoring a Team of Product Managers",
];

const Who = () => {
  return (
    <Container title={"Who's roman"}>
      <ul className="!list-disc">
        {data.map((item, index) => (
          <li
            className="relative w-full py-[11px] flex justify-between boder last:after:!h-0 text-[14px] md:!text-[16px] before:w-1 before:h-1 before:bg-[#a1c568] before:rounded-full before:absolute before:top-5 before:-left-1 pl-3"
            key={index}
          >
            <span className="text-[16px]">{item}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Who;
