import React from "react";
import img1 from "../assets/arrow.svg";
import img2 from "../assets/clipboard.svg";
import logo from "../assets/OIG2.jpeg";
import bar from "../assets/bars.svg";
import home from "../assets/home-icon.svg";
import hire from "../assets/enter-icon.svg";
import phone from "../assets/phone-line-icon.svg";
import mail from "../assets/envelope-line-icon.svg";
import linkedin from "../assets/linkedin-square-icon.svg";

const data = [
  "Head of the product Design & Ux",
  "18+ year of User Interaction Experience",
  "15+ years of leading Web-Based Software Engineering, and Agile/Scrum Development",
  "4 year of Managing a Team of Remote UI Designers and Mentoring a Team of Product Managers",
];

const nav = [
  { title: "Who's Roman", img: home },
  { title: "Project 1", sub: "Medical Software", img: img2, child: true },
  { title: "Project 2", sub: "Gas Pipeline", img: img2, child: true },
  { title: "Project 3", sub: "Scoring System", img: img2, child: true },
  { title: "phone-line-icon Roman Now!", sub: "Contact Info", img: hire },
];
const contact = [
  { title: "561-247-3146", img: phone },
  { title: "ux@pixelblendr.com", img: mail },
  { title: "linkedin.com/in/pixelwiz", img: linkedin },
];

const SideBar = () => {
  const [visibility, setVisibility] = React.useState(null);
  const [openNav, setOpenNav] = React.useState(false);

  const handleClick = React.useCallback((i) => {
    if (visibility === i) return setVisibility(null);
    setVisibility(i);
  });

  return (
    <section className=" fixed md:relative top-0 left-0 z-40  md:block w-full md:w-[30%] ">
      <div className="bg-black p-4 md:hidden flex justify-between">
        <img src={logo} alt="" className="rounded-full w-10  md:inline-block" />
        <button
          data-collapse-toggle="navbar-cta"
          type="button"
          className=" inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 group:"
          aria-controls="navbar-cta"
          aria-expanded="false"
          onClick={() => setOpenNav(!openNav)}
        >
          <span className="sr-only">Open main menu</span>
          <img src={bar} alt="" className="w-28" />
        </button>
      </div>
      <aside
        className={
          "bg-black flex flex-col justify-around px-3 max-w-[70%]  w-full md:max-w-full h-screen -mt-[1.2rem] transition-all duration-300 md:mt-0 md:!w-full md:!opacity-100 " +
          (openNav == true ? "w-0 opacity-0" : "")
        }
      >
        <div>
          <img
            src={logo}
            alt=""
            className="rounded-full mx-auto w-28 my-5 md:inline-block hidden"
          />
          <ul>
            {nav.map((item, index) => (
              <li
                className="w-full border-white border-t last:border-b first:border-0 transition-all duration-300 ease-in-out cursor-pointer"
                key={index}
                onClick={() => handleClick(index)}
              >
                <div className="flex items-center ">
                  <img src={item.img} alt="" className="w-6 h-4" />
                  <div className="flex justify-between w-full px-4">
                    <span className="text-white p-3">
                      <h3 className=" text-white">{item.title}</h3>
                      {item.sub && <p className="text-xs">{item.sub}</p>}
                    </span>
                    {index == 0 || index == 4 ? (
                      ""
                    ) : (
                      <img
                        src={img1}
                        alt=""
                        className={
                          "w-3 transition-all duration-300 ease-in-out justify-items-end " +
                          (visibility == index ? "rotate-180" : "")
                        }
                      />
                    )}
                  </div>
                </div>
                {item.child && visibility === index && (
                  <ul className="text-white text-center transition-all duration-300 ease-in-out">
                    <li className="border-white border-t last:border-b first:border-0 p-3">
                      Overview
                    </li>
                    <li className="border-white border-t last:border-b first:border-0 p-3">
                      Phase 1
                    </li>
                    <li className="border-white border-t last:border-b first:border-0 p-3">
                      Phase 2
                    </li>
                    <li className="border-white border-t first:border-0 p-3">
                      Phase 3
                    </li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-white">
          <h2 className="text-xl">
            Portfolio of <br />
            <span className="text-3xl">Roman smolkin</span>
          </h2>
          <ul className="mb-5">
            {contact.map((item, index) => (
              <li
                className="flex items-center w-full text-sm gap-4 px-2 "
                key={index}
              >
                <img src={item.img} alt="" className="w-4 h-4 mb-2" />
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
};

export default SideBar;
