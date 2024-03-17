import React from "react";
import bulb from "../assets/images/service/bulb.svg";
import cc from "../assets/images/service/cc.svg";
import app from "../assets/images/service/app.svg";
import stack from "../assets/images/service/stack.svg";
import Card from "./Card";
import Container from "./Container";

const data = [
  {
    img: bulb,
    name: "Logo Design",
    text: "Basic categories of logo styles are: word, letter, brand, combination marks and emblems.",
  },
  {
    img: stack,
    name: "Web Design",
    text: "Web designers craft the overall vision and plan for a website layouts, mobile first, posters, branding.",
  },
  {
    img: cc,
    name: "Business Card",
    text: "Every business card should include your name, the company name, skills, cases and contacts.",
  },
  {
    img: app,
    name: "Mobile App Design",
    text: "Create an animated app prototype and ask people to test it and provide feedback.",
  },
];

const Service = () => {
  return (
    <Container title={"My Service"}>
      <Card data={data} />
    </Container>
  );
};

export default Service;
