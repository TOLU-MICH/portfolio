import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";

import Details from "./component/Details";
import SideBar from "./component/SideBar";
import Hero from "./component/Hero";

import img1 from "./assets/arrow.svg";
import img2 from "./assets/clipboard.svg";
import logo from "./assets/OIG2.jpeg";

const data = [
  "Head of the product Design & Ux",
  "18+ year of User Interaction Experience",
  "15+ years of leading Web-Based Software Engineering, and Agile/Scrum Development",
  "4 year of Managing a Team of Remote UI Designers and Mentoring a Team of Product Managers",
];

const nav = [
  { title: "Who's Roman", img: img2 },
  { title: "Project 1", sub: "Medical Software", img: img2 },
  { title: "Project 2", sub: "Gas Pipeline", img: img2 },
  { title: "Project 3", sub: "Scoring System", img: img2 },
  { title: "Hire Roman Now!", sub: "Contact Info", img: img2 },
];
const contact = [
  { title: "561-247-3146", img: img2 },
  { title: "ux@pixelblendr.com", img: img2 },
  { title: "linkedin.com/in/pixelwiz", img: img2 },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="h-screen w-full flex bg-gray-100">
      <SideBar />
      <div className="h-full w-full flex  justify-between">
        <Hero />

        {/* <div className="max-w-[50%] w-full flex-col flex gap-8 justify-evenly">
          <div className="">
            <h1 className="py-10 text-5xl text-center">Who's Roman?</h1>
            <ul className="list-disc mb-5 px-36">
              {data.map((item, index) => (
                <li key={index} className="text-2xl py-3  list-disc">
                  {item}
                </li>
              ))}
            </ul>
            <div className="p-8 text-4xl leading-tight text-gray-700 shadow-xl mx-20">
              <p>
                Shaping the way people use and experience technology to interact
                with the world today aand in the future with a huge passion for
                intuitive user experiences
              </p>
            </div>
          </div>

          <button className="mx-auto py-4 px-12 rounded-full bg-black text-white font-bold">
            VIEW PORTFOLIO
          </button>
        </div>
        <div className="max-w-[50%] w-full py-16 px-20">
          <div className="w-full h-full border-8 border-white rounded-[6rem] overflow-hidden">
            <img src={man} alt="" className="object-cover" />
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default App;
