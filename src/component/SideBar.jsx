import React from "react";
import img1 from "../assets/arrow.svg";
import img2 from "../assets/clipboard.svg";
import logo from "../assets/OIG2.jpeg";
import bar from "../assets/bars.svg";
import home from "../assets/home-icon.svg";
import hire from "../assets/enter-icon.svg";
import phone from "../assets/phone-line-icon.svg";
import linkedin from "../assets/linkedin-square-icon.svg";
import user from "../assets/images/nav/user.svg";
import work from "../assets/images/nav/work.svg";
import mail from "../assets/images/nav/envelope-line-icon.svg";

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

const data = [
  { title: "Profile", img: user },
  { title: "Works", img: work },
  { title: "Contact me", img: mail },
];

const SideBar = ({ openNav = false, myRef }) => {
  return (
    <section className="w-full h-full" ref={myRef}>
      <aside
        id="default-sidebar"
        class={
          "!bg-[#282828] fixed top-0 left-0 z-40 w-64 h-screen transition-transform  md:hidden " +
          (openNav == false ? "-translate-x-full" : "")
        }
        aria-label="Sidenav"
      >
        <div class="bg-[#282828] overflow-y-auto py-5 px-3 h-full border-r border-gray-200 ">
          <ul class="space-y-2">
            {data.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <img src={item.img} alt="" className="w-6 h-6" />
                  <span class="ml-3">{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
};

export default SideBar;
