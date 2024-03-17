import React from "react";

const Card = ({ data, btn = false }) => {
  return (
    <div className="flex flex-wrap h-fit w-full">
      {data.map((item, index) => (
        <div
          className={
            "text-center w-full md:max-w-[49.998%] py-[30px] md:p-[30px] " +
            ((index % 2 != 0 ? "boder-l " : " ") +
              (!btn && (index == 0 || index == 1 ? "boder" : "")))
          }
        >
          {console.log(index)}
          {item.img && (
            <div className="bg-[#202020] w-[60px] h-[60px] flex justify-center items-center rounded-xl mx-auto">
              <img
                src={item.img}
                alt=""
                className="w-[34px] h-[34px] object-contain"
              />
            </div>
          )}
          <div>
            <h3 className="text-white text-base font-bold text-center md:my-2 mt-[10px] mb-[5px]">
              {item.name}
            </h3>

            {item.price && (
              <span className="relative flex gap-x-1 py-[30px] justify-center">
                <p>$</p>
                <h1 className="text-5xl font-bold text-white">{item.price}</h1>
                <p className="relative -bottom-[23px]">hour</p>
              </span>
            )}

            {item.li && (
              <ul className="pb-4">
                {item.li.map((item, index) => (
                  <li className="my-[10px] text-white text-center" key={index}>
                    {item}
                  </li>
                ))}

                {item.invalid &&
                  item.invalid.map((item, index) => (
                    <li
                      className="my-[10px] text-white text-center line-through"
                      key={index}
                    >
                      {item}
                    </li>
                  ))}
              </ul>
            )}

            {item.text && (
              <p className="text-base text-center my-1 md:my-2">
                <strong>{item.text}</strong> {data.text}
              </p>
            )}

            {btn == true && (
              <>
                <p className="boder"></p>
                <p className="w-full p-[30px] cursor-pointer group hover:text-[#a1c568] flex items-center justify-center text-white uppercase font-bold">
                  Order now
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="122.88px"
                    height="80.593px"
                    viewBox="0 0 122.88 80.593"
                    enable-background="new 0 0 122.88 80.593"
                    xml:space="preserve"
                    className="fill-white w-fit h-3 -rotate-90 group-hover:fill-[#a1c568] group-hover:translate-x-3 transition-transform duration-200 ease-in-out -mt-[1px]"
                  >
                    <g>
                      <polygon points="122.88,0 122.88,30.82 61.44,80.593 0,30.82 0,0 61.44,49.772 122.88,0" />
                    </g>
                  </svg>
                </p>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
