import hero from "../assets/man.png";
import Button from "./Button";

const data = [
  "Head of the product Design & Ux",
  "18+ year of User Interaction Experience",
  "15+ years of leading Web-Based Software Engineering, and Agile/Scrum Development",
  "4 year of Managing a Team of Remote UI Designers and Mentoring a Team of Product Managers",
];

const Hero = () => {
  return (
    <section className="h-screen w-full text-black hero relative z-[1] bg-[#fff]">
      <div className="flex flex-col justify-center items-center w-full mt-10 md:mt-20 gap-8 md:gap-16">
        <div className="max-w-screen-xl w-full flex  items-center gap-10 md:gap-28 flex-col md:flex-row m-auto h-full pt-20 md:pt-0 px-8 md:px-12 ">
          <div className="md:w-[47%] flex md:gap-8 flex-col px-[15px] md:px-0 mb-6">
            <div>
              {/* <p className="text-xl md:text-3xl font-bold ">
                Welcome To my portfolio Website
              </p> */}
              <h1 className="text-4xl md:text-6xl  font-bold leading-snug">
                Who's Roman?
              </h1>
            </div>
            <ul className="list-disc mb-5">
              {data.map((item, index) => (
                <li key={index} className="text-2xl py-3  list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-[53%] h-[20rem] md:h-[30rem] overflow-hidden object-cover rounded-3xl px-[15px] md:px-0">
            <img src={hero} alt="aeroplane" className="" />
          </div>
        </div>
        <div className="p-8 text-3xl leading-tight text-white shadow-xl md:max-w-[50%] bg-black rounded-xl mx-4">
          <p>
            Shaping the way people use and experience technology to interact
            with the world today aand in the future with a huge passion for
            intuitive user experiences
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
