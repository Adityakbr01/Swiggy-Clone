import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { RiDiscountPercentLine } from "react-icons/ri";
import { RiShoppingCartLine } from "react-icons/ri";
import "../Components/Navbar.css";
import Hamburger from "hamburger-react";
import "../Components/Navbar.css"

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="w-full navbar h-20 bg-[#fff] flex items-center justify-between fixed  left-0 top-0 xl:px-[10rem] px-[2rem] lg:px-[6rem]  shadow-md">
      <div className="left-Navbar flex items-center gap-6 md:gap-14">
        <div>
          <svg
            class="_8pSp-"
            viewBox="0 0 559 825"
            height="49"
            width="34"
            fill="#fc8019"
            className="hover:scale-110 cursor-pointer transition-all ease-in duration-200"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M542.92 388.542C546.805 366.526 542.355 349.598 530.881 340.76C513.621 327.466 487.698 320.236 425.954 320.236C380.271 320.236 331.225 320.286 310.268 320.275C308.322 319.894 301.285 317.604 301.02 309.112L300.734 174.289C300.727 165.779 307.531 158.857 315.943 158.839C324.369 158.825 331.204 165.723 331.211 174.226C331.211 174.226 331.421 247.414 331.441 273.424C331.441 275.936 332.892 281.8 338.549 283.328C375.43 293.267 561.865 285.999 558.967 251.804C543.147 109.96 424.476 0 280.394 0C235.021 0 192.065 10.9162 154.026 30.2754C62.9934 77.5955 -1.65904 173.107 0.0324268 283.43C1.23215 361.622 52.2203 500.605 83.434 521.234C97.8202 530.749 116.765 527.228 201.484 527.228C239.903 527.228 275.679 527.355 293.26 527.436C295.087 527.782 304.671 530.001 304.671 538.907L304.894 641.393C304.915 649.907 298.104 656.826 289.678 656.829C281.266 656.843 274.434 649.953 274.42 641.446C274.42 641.446 275.17 600.322 275.17 584.985C275.17 581.435 275.424 575.339 265.178 570.727C231.432 555.553 121.849 564.712 115.701 581.457C113.347 587.899 125.599 612.801 144.459 644.731C170.102 685.624 211.889 747.245 245.601 792.625C261.047 813.417 268.77 823.813 280.467 824.101C292.165 824.389 300.514 814.236 317.213 793.928C383.012 713.909 516.552 537.663 542.92 388.542Z"
              fill="url(#paint0_linear_19447_66107)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_19447_66107"
                x1="445.629"
                y1="63.8626"
                x2="160.773"
                y2="537.598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF993A"></stop>
                <stop offset="1" stop-color="#F15700"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="cursor-pointer flex items-center gap-3">
          <h2 className="font-semibold border-b-2 text-sm hover:text-[#F77218] hover:border-[#F77218] transition-all ease-in duration-100  border-[#000]">
            Other
          </h2>
          <IoIosArrowDown size={22} className="text-[#f77218] font-semibold" />
        </div>
      </div>
      <div className="right-Navbar">
        <ul
          className={`lg:flex lg:flex-row items-center flex-col bg-[#d1d1d1] lg:bg-transparent gap-3 lg:gap-12 hidden${
            navOpen
              ? "items-center justify-center flex absolute top-0 left-0 px-10 h-[100vh] w-[84vw] z-40 "
              : ""
          }`}
        >
          <li className="lg:flex items-center gap-2 hidden cursor-pointer transition-all ease-in duration-100 hover:text-[#F56F15]">
            <div>
              <svg
                class="_1GTCc"
                viewBox="0 0 20 20"
                height="20"
                width="20"
                fill="none"
              >
                <rect
                  x="2.46094"
                  y="7.98145"
                  width="15.0784"
                  height="10.7765"
                  rx="1.52523"
                  stroke="#02060C"
                  stroke-opacity="0.75"
                  fill="none"
                  stroke-width="1.8"
                  stroke-linejoin="round"
                ></rect>
                <path
                  d="M6.17822 4.91866C6.17822 3.90782 6.99767 3.08838 8.0085 3.08838H11.9916C13.0024 3.08838 13.8219 3.90782 13.8219 4.91866V5.22965C13.8219 5.61625 13.5085 5.92965 13.1219 5.92965H6.87822C6.49162 5.92965 6.17822 5.61625 6.17822 5.22965V4.91866Z"
                  fill="#02060C"
                  fill-opacity="0.75"
                ></path>
              </svg>
            </div>
            <h2 className="text-3xl lg:text-lg ">Swiggy Corporate</h2>
          </li>
          <li className="flex items-center gap-2 cursor-pointer transition-all ease-in duration-100 hover:text-[#F56F15]">
            <IoSearch size={22} />
            <h2 className="text-3xl lg:text-lg ">Search</h2>
          </li>
          <li className="flex items-center gap-2 cursor-pointer transition-all ease-in duration-100 hover:text-[#F56F15]">
            <RiDiscountPercentLine size={22} />
            <h2 className="text-3xl lg:text-lg ">Offers</h2>
          </li>
          <li className="flex items-center gap-2 cursor-pointer group transition-all ease-in duration-100 hover:fill-[#F56F15] hover:text-[#F56F15]">
            <div>
              <svg
                class="_1GTCc"
                viewBox="6 -1 12 25"
                height="19"
                width="19"
                fill="#686b78"
                className="group-hover:fill-[#F56F15] "
              >
                <path d="M21.966903,13.2244898 C22.0156989,12.8231523 22.0408163,12.4145094 22.0408163,12 C22.0408163,11.8357822 22.036874,11.6724851 22.029079,11.5101984 L17.8574333,11.5102041 C17.8707569,11.6717062 17.877551,11.8350597 17.877551,12 C17.877551,12.4199029 17.8335181,12.8295214 17.749818,13.2244898 L21.966903,13.2244898 Z M21.5255943,15.1836735 L16.9414724,15.1836735 C15.8950289,16.8045422 14.0728218,17.877551 12,17.877551 C9.92717823,17.877551 8.1049711,16.8045422 7.05852762,15.1836735 L2.47440565,15.1836735 C3.80564362,19.168549 7.56739481,22.0408163 12,22.0408163 C16.4326052,22.0408163 20.1943564,19.168549 21.5255943,15.1836735 Z M21.7400381,9.55102041 C20.6468384,5.18931674 16.7006382,1.95918367 12,1.95918367 C7.2993618,1.95918367 3.3531616,5.18931674 2.25996187,9.55102041 L6.6553883,9.55102041 C7.58404845,7.5276442 9.62792376,6.12244898 12,6.12244898 C14.3720762,6.12244898 16.4159515,7.5276442 17.3446117,9.55102041 L21.7400381,9.55102041 Z M2.03309705,13.2244898 L6.25018203,13.2244898 C6.16648186,12.8295214 6.12244898,12.4199029 6.12244898,12 C6.12244898,11.8350597 6.1292431,11.6717062 6.14256675,11.5102041 L1.97092075,11.5102041 C1.96312595,11.6724851 1.95918367,11.8357822 1.95918367,12 C1.95918367,12.4145094 1.98430112,12.8231523 2.03309705,13.2244898 Z M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M12,15.9183673 C14.1640545,15.9183673 15.9183673,14.1640545 15.9183673,12 C15.9183673,9.83594547 14.1640545,8.08163265 12,8.08163265 C9.83594547,8.08163265 8.08163265,9.83594547 8.08163265,12 C8.08163265,14.1640545 9.83594547,15.9183673 12,15.9183673 Z"></path>
              </svg>
            </div>
            <h2 className="text-3xl lg:text-lg ">Help</h2>
          </li>
          <li className="flex items-center gap-2 cursor-pointer transition-all ease-in duration-100 hover:text-[#F56F15]">
            <RiShoppingCartLine size={22} />
            <h2 className="text-3xl lg:text-lg ">Cart</h2>
          </li>
        </ul>
        <div class="lg:hidden">
          <Hamburger
            toggled={navOpen}
            toggle={setNavOpen}
            color={"#F56F15"}
            direction="left"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
