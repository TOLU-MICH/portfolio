import React from "react";
import Container from "./Container";
import Card from "./Card";
import crown from "../assets/images/pricing/crown.svg";
import rocket from "../assets/images/pricing/rocket.svg";

const data = [
  {
    img: crown,
    name: "Popular",
    price: 22,
    li: ["Web Design", "Mobile-First", "Graphic Design"],
    invalid: ["Logo Design", "Photography"],
  },
  {
    img: rocket,
    name: "Pro",
    price: 48,
    li: [
      "Web Design",
      "Mobile-First",
      "Graphic Design",
      "Logo Design",
      "Photography",
    ],
  },
];

const Pricing = () => {
  return (
    <Container title={"Pricing"}>
      {/* <div className="md:flex"> */}
      <Card data={data} btn={true} />
      {/* </div> */}
    </Container>
  );
};

export default Pricing;
