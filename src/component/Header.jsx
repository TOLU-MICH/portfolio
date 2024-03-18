import React from "react";
import bar from "../assets/images/nav/bar.svg";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const sidebarRef = React.useRef();

  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpenNav(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header className="w-full fixed top-0 z-[300] lg:absolute lg:top-24 lg:z-[100] lg:rounded-xl lg:w-20 lg:cont  lg:before:absolute lg:before:w-full lg:before:visible  lg:before:h-full lg:before:top-[10px] lg:before:left-[-10px] lg:before:rounded-xl lg:before:border-[#a1c568] lg:before:border-2 lg:before:z-0 lg:before:opacity-65 lg:before:cont lg:before:border-r-0 lg:before:border-t-0">
      <div className="bg-[#323232] w-full h-full lg:rounded-xl py-[10px]">
        <ul className="flex justify-around items-center md:hidden boder fixed top-0">
          <li className="py-[9px] px-[3px]">
            <Link
              to="/"
              className="uppercase block text-left relative text-white font-bold text-sm"
            >
              Roman Skolkin
            </Link>
            <div class="w-max">
              <h3 class="text-sm animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-[#a1c568] font-bold">
                UX & Product designer
              </h3>
            </div>
          </li>
          <li
            className="py-[9px] px-[3px]"
            onClick={() => console.log("object")}
          >
            <button
              className="uppercase block text-center relative font-medium text-xs w-full h-full"
              onClick={() => setOpenNav(!openNav)}
            >
              <img src={bar} alt="" className="mx-auto h-10 w-[30px]" />
            </button>
          </li>
        </ul>
        <ul className="flex justify-around lg:block">
          <li className="py-[9px] px-[3px]">
            <Link
              to="#About"
              className="uppercase block text-center relative font-medium text-xs group"
            >
              <svg
                width="40px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto stroke-white group-hover:stroke-[#a1c568] transition-all duration-300 ease-in"
              >
                <circle cx="12" cy="6" r="4" stroke-width="1.5" />
                <path
                  d="M15 20.6151C14.0907 20.8619 13.0736 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C15.866 13 19 14.7909 19 17C19 17.3453 18.9234 17.6804 18.7795 18"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
              <span className="transition-all duration-300 ease-in absolute  left-14 top-1  bg-[#a1c568] text-[#202020] rounded-lg p-1 px-2  opacity-0 w-0 group-hover:w-max group-hover:opacity-100 text-nowrap overflow-hidden">
                About me
              </span>
            </Link>
          </li>
          <li className="py-[9px] px-[3px]">
            <a
              href=""
              className="uppercase block text-center relative font-medium text-xs group"
            >
              <svg
                width="40px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto stroke-white group-hover:stroke-[#a1c568] transition-all duration-300 ease-in"
              >
                <path
                  d="M9 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7H15M9 7V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7M9 7H15"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="transition-all duration-300 ease-in absolute  left-14 top-1  bg-[#a1c568] text-[#202020] rounded-lg p-1 px-2  opacity-0 w-0 group-hover:w-max group-hover:opacity-100 text-nowrap overflow-hidden">
                Projects
              </span>
            </a>
          </li>
          <li className="py-[9px] px-[3px]">
            <a
              href=""
              className="uppercase block text-center relative font-medium text-xs group"
            >
              <svg
                width="40px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto stroke-white group-hover:stroke-[#a1c568] transition-all duration-300 ease-in"
              >
                <path
                  d="M3 8L8.44992 11.6333C9.73295 12.4886 10.3745 12.9163 11.0678 13.0825C11.6806 13.2293 12.3194 13.2293 12.9322 13.0825C13.6255 12.9163 14.2671 12.4886 15.5501 11.6333L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="transition-all duration-300 ease-in absolute  left-14 top-1  bg-[#a1c568] text-[#202020] rounded-lg p-1 px-2  opacity-0 w-0 group-hover:w-max group-hover:opacity-100 text-nowrap overflow-hidden">
                Contact me
              </span>
            </a>
          </li>
        </ul>

        <SideBar openNav={openNav} myRef={sidebarRef} />
      </div>
    </header>
  );
};

export default Header;
