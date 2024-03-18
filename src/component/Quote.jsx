import React from "react";
import Container from "./Container";
import quote from "../assets/images/quote/quote.svg";
import man from "../assets/man.png";

const Quote = () => {
  return (
    <Container title={"Quote"}>
      <div className="py-[30px] xl:p-[30px]">
        <div className="w-28 h-28 rounded-full overflow-hidden m-auto ">
          <img src={man} alt="" className="w-40" />
        </div>
        <div className="py-[30px] md:p-[30px]">
          <img src={quote} alt="" className="w-4 h-4" />
          <p className="p-8">
            Shaping the way people use and experience technology to interact
            with the world today aand in the future with a huge passion for
            intuitive user experiences
          </p>
          <div className="relative w-full h-4">
            <img
              src={quote}
              alt=""
              className="w-4 h-4 absolute right-0 rotate-180"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Quote;
