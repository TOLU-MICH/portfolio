import React from "react";

const Container = ({ children, title }) => {
  return (
    <section className="relative mb-[30px] ">
      <h2 className="">{title}</h2>

      {children}
    </section>
  );
};

export default Container;
