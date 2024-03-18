import React from "react";
import Container from "./Container";

const bio = [
  { title: "Phone", desc: "561-247-3146" },
  { title: "Mail", desc: "ux@pixelblendr.com" },
  { title: "LinkedIn", desc: "linkedin.com/in/pixelwiz" },
];

const Contact = () => {
  return (
    <Container title={"Get in Touch"}>
      <div className="">
        {bio.map((item, index) => (
          <p
            className="w-full  flex justify-between py-[11px] boder last:after:!h-0 text-[14px] md:!text-[16px]"
            key={index}
          >
            <strong className="p-[1px_8px] mr-[8px] bg-[#a1c568] rounded-sm h-fit text-[#202020]">
              {item.title}:
            </strong>{" "}
            <span className="text-[16px]">{item.desc}</span>
          </p>
        ))}
      </div>
    </Container>
  );
};

export default Contact;
