import React, { useRef, useState, useEffect } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FiFilter } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import "../Hero/Hero.css";

function Hero({ Header_Data, TopResturent }) {
  const { image, offer, title, rating, minTime, maxTime, name, place } =
    TopResturent;
  const [initHeader, setInitHeader] = useState(0);
  const [InitialTopRes, setInitialTopRes] = useState(0);
  const [isRightArrowDisabled01, setIsRightArrowDisabled01] = useState(false);
  const [isLeftArrowDisable01, setIsLeftArrowDisabled01] = useState(true);
  const [isRightArrowDisabled, setIsRightArrowDisabled] = useState(false);
  const [isLeftArrowDisabled, setIsLeftArrowDisabled] = useState(true);
  const swiper_pre = () => {
    if (initHeader <= 0) return setIsLeftArrowDisabled01(true);
    setInitHeader(initHeader - 3);
    setIsRightArrowDisabled01(false);
  };

  const swiper_nxt = () => {
    if (initHeader + 3 >= Header_Data.length) {
      setIsRightArrowDisabled01(true);
    } else {
      setInitHeader(initHeader + 3);
      setIsLeftArrowDisabled01(false);
    }
  };
  const swiper_pre1 = () => {
    if (InitialTopRes <= 0) return setIsLeftArrowDisabled(true);
    setInitialTopRes(InitialTopRes - 3);
    setIsRightArrowDisabled(false);
  };

  const swiper_nxt1 = () => {
    if (InitialTopRes + 3 >= TopResturent.length) {
      setIsRightArrowDisabled(true);
      setIsLeftArrowDisabled(false);
    } else {
      setInitialTopRes(InitialTopRes + 3);
      setIsLeftArrowDisabled(false);
    }
  };

  return (
    <div className="max-w-[1100px] w-[90vw] flex flex-col gap-2 mx-auto h-full mt-[7rem]">
      <div className="flex items-center justify-between h-12 w-full">
        <h1 className="font-bold text-2xl">What's on your mind?</h1>
        <div className="flex items-center gap-4 slide-controler">
          <span
            className={`p-2 rounded-full bg-[#f5f5f5] cursor-pointer swiper-btn-prev ${
              isLeftArrowDisable01 ? "opacity-40 cursor-not-allowed" : ""
            } `}
            onClick={swiper_pre}
          >
            <IoIosArrowRoundBack />
          </span>
          <span
            className={`p-2 rounded-full bg-[#f5f5f5] cursor-pointer swiper-btn-next ${
              isRightArrowDisabled01 ? "opacity-40 cursor-not-allowed" : ""
            }`}
            onClick={swiper_nxt}
          >
            <IoIosArrowRoundForward />
          </span>
        </div>
      </div>
      <div className="w-full h-[160px]  mx-h-[160px] px-1 overflow-hidden flex gap-3 mt-3">
        {Header_Data.map((elem) => (
          <div
            key={elem.id}
            style={{
              transform: `translateX(-${initHeader * 55}%)`,
              transition: "transform 0.3s ease-in-out",
            }}
            className={`flex shrink-0 items-center justify-center`}
          >
            <img
              className="min-w-[120px] max-w-[144px] object-cover cursor-pointer transition-all ease-in duration-100"
              src={elem.img}
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="w-full h-[1.4px] mt-14 mb-10 bg-[#F2F2F3]"></div>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="font-extrabold text-2xl">
            Top restaurant chains in Patna
          </h1>
          <div className="flex items-center gap-4 slide-controler">
            <span
              className={`p-2 rounded-full  bg-[#f1f1f1] cursor-pointer swiper-btn-prev ${
                isLeftArrowDisabled ? "opacity-40 cursor-not-allowed" : ""
              }`}
              onClick={swiper_pre1}
            >
              <IoIosArrowRoundBack />
            </span>
            <span
              className={`p-2 rounded-full bg-[#f1f1f1] cursor-pointer swiper-btn-next ${
                isRightArrowDisabled ? "opacity-40 cursor-not-allowed" : ""
              }`}
              onClick={swiper_nxt1}
            >
              <IoIosArrowRoundForward />
            </span>
          </div>
        </div>

        <div className="top-resturant-container overflow-hidden mt-4 pb-10 flex items-center gap-2">
          {TopResturent.map((elem) => {
            return (
              <div
                style={{
                  transform: `translateX(-${InitialTopRes * 70}%)`,
                  transition: "all 0.3s ease-in-out",
                }}
                className="transition-all ease-in duration-200 scl cursor-pointer"
              >
                <div className="card  h-[10rem] w-[13rem] bg-white flex items-center justify-center rounded-xl relative overflow-hidden">
                  <img
                    className="card-img object-cover relative z-10"
                    src={elem.image}
                    alt=""
                  />
                  <div className="absolute inset-0 top-[50%] h-[60%] left-0 bg-gradient-to-t from-black/100 to-transparent opacity-220 z-20"></div>
                  <div className="absolute inset-0 top-[80%] h-[60%] left-2 z-50">
                    <h2 className="text-xl font-black text-white">
                      {elem.offer}
                    </h2>
                  </div>
                </div>
                <div className="pl-2 mt-1 flex flex-col">
                  <h3 className="font-bold text-[13px]">{elem.name}</h3>
                  <div className="flex items-center gap-1">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      role="img"
                      aria-hidden="true"
                      strokeColor="rgba(2, 6, 12, 0.92)"
                      fillColor="rgba(2, 6, 12, 0.92)"
                      className="-ml-[1px]"
                    >
                      <circle
                        cx="10"
                        cy="10"
                        r="9"
                        fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
                      ></circle>
                      <path
                        d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                        fill="white"
                      ></path>
                      <defs>
                        <linearGradient
                          id="StoreRating20_svg__paint0_linear_32982_71567"
                          x1="10"
                          y1="1"
                          x2="10"
                          y2="19"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#21973B"></stop>
                          <stop offset="1" stop-color="#128540"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="font-medium">{elem.rating}</span>
                    <span></span>
                    <span className="font-medium">
                      {elem.minTime}-{elem.maxTime} mins
                    </span>
                  </div>
                  <p className="text-xs opacity-80 mt-1 leading-none font-medium">
                    Burger American <br />
                    Ladipur
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full h-[1.4px] mt-2 mb-6 bg-[#F2F2F3]"></div>
        <div className="CatogryandCity my-">
          <h2 className="font-bold text-xl sm:text-2xl ">
            Restaurants with online food delivery in Patna
          </h2>
          <div className="flex flex-wrap items-center mt-4 gap-4">
            <div className="flex items-center gap-1 border rounded-full px-2 py-1 cursor-pointer hover:border-sky-500 transition-all ease-in duration-100 hover:text-sky-500">
              <button className="font-medium">Fillter </button>
              <FiFilter className="font-medium" />
            </div>
            <div className="flex items-center gap-1 border rounded-full px-2 py-1 cursor-pointer hover:border-sky-500 transition-all ease-in duration-100 hover:text-sky-500">
              <button className="font-medium">Short By </button>
              <IoIosArrowDown className="font-medium" />
            </div>

            <button className="border rounded-full px-2 py-1 cursor-pointer font-medium hover:border-sky-500 transition-all ease-in duration-100 hover:text-sky-500">
              Fast Delivery
            </button>
            <button className="border hover:border-sky-500 transition-all ease-in duration-100 hover:text-sky-500 rounded-full px-2 py-1 cursor-pointer font-medium">
              New On Swiggy
            </button>
            <button className="border rounded-full px-2 py-1 cursor-pointer font-medium hover:border-sky-500 transition-all ease-in duration-100 hover:text-sky-500">
              Rating 4.0+
            </button>
            <button className="border rounded-full px-2 py-1 cursor-pointer font-medium hover:border-sky-500 transition-all ease-in duration-100 hover:text-sky-500">
              Pure veg
            </button>
            <button className="border rounded-full px-2 py-1 cursor-pointer font-medium hover:border-sky-500 transition-all ease-in duration-100 hover:text-sky-500">
              Offer
            </button>

            <button className="border rounded-full px-2 py-1 cursor-pointer font-medium hover:border-sky-500 transition-all ease-in duration-100 hover:text-sky-500">
              Rs.300-Rs.600
            </button>
            <button className="border rounded-full px-2 py-1 cursor-pointer font-medium hover:border-sky-500 transition-all ease-in duration-100 hover:text-sky-500">
              Less than Rs.300
            </button>
          </div>
          <div className="top-resturant-container justify-center sm:justify-start mt-4 pb-10 flex flex-wrap items-center gap-2">
            {TopResturent.map((elem) => {
              return (
                <div
                  style={{
                    transform: `translateX(-${InitialTopRes * 70}%)`,
                    transition: "all 0.3s ease-in-out",
                  }}
                  className="hover:scale-110 shrink-0 scl transition-all ease-in duration-200 cursor-pointer"
                >
                  <div className="card h-[10rem] w-[13rem] bg-white flex items-center justify-center rounded-xl relative overflow-hidden">
                    <img
                      className="card-img object-cover relative z-10"
                      src={elem.image}
                      alt=""
                    />
                    <div className="absolute inset-0 top-[50%] h-[60%] left-0 bg-gradient-to-t from-black/100 to-transparent opacity-220 z-20"></div>
                    <div className="absolute inset-0 top-[80%] h-[60%] left-2 z-50">
                      <h2 className="text-xl font-black text-white">
                        {elem.offer}
                      </h2>
                    </div>
                  </div>
                  <div className="pl-2 mt-1 flex flex-col">
                    <h3 className="font-bold text-[13px]">{elem.name}</h3>
                    <div className="flex items-center gap-1">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        role="img"
                        aria-hidden="true"
                        strokeColor="rgba(2, 6, 12, 0.92)"
                        fillColor="rgba(2, 6, 12, 0.92)"
                        className="-ml-[1px]"
                      >
                        <circle
                          cx="10"
                          cy="10"
                          r="9"
                          fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
                        ></circle>
                        <path
                          d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                          fill="white"
                        ></path>
                        <defs>
                          <linearGradient
                            id="StoreRating20_svg__paint0_linear_32982_71567"
                            x1="10"
                            y1="1"
                            x2="10"
                            y2="19"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#21973B"></stop>
                            <stop offset="1" stop-color="#128540"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      <span className="font-medium">{elem.rating}</span>
                      <span></span>
                      <span className="font-medium">
                        {elem.minTime}-{elem.maxTime} mins
                      </span>
                    </div>
                    <p className="text-xs opacity-80 mt-1 leading-none font-medium">
                      Burger American <br />
                      Ladipur
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
