import { CheckCircleOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { IoLocationOutline, IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram, BsTelephoneFill } from "react-icons/bs";
import swizzWhite from "../.././assets/swizz-white.jpg";
import swizzBlack from "../.././assets/wizz-black.jpg";
import { Link } from "react-router-dom";
function Footer() {
  const [isHover, setIsHover] = useState(false);
  return (
    <footer className="relative bg-[#333333] flex flex-col justify-center min-h-[100vh] items-center py-10">
      <div className="social absolute flex flex-col left-0 bottom-20 px-5">
        <a className="cursor-pointer">
          <FaFacebookF className="mb-4 text-white text-[20px]" />
        </a>

        <a className="cursor-pointer">
          <FaLinkedinIn className="mb-4 text-white text-[20px]" />
        </a>

        <a className="cursor-pointer">
          <BsInstagram className="mb-4 text-white text-[20px]" />
        </a>

        <a className="cursor-pointer">
          <AiOutlineTwitter className="mb-4 text-white text-[20px]" />
        </a>
      </div>
      <h3 className="text-[30px] md:text-[50px] text-center text-white">
        swiss energy hub <br />{" "}
        <span className="tracking-[5px] text-[18px] md:text-[22] text-sm text-zinc-400">
          SWITZERLAND
        </span>
      </h3>
      <div
        className="my-10 h-[167px]"
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {isHover ? (
          <img src={swizzBlack} className="w-[250px]" alt="" />
        ) : (
          <img src={swizzWhite} className="w-[250px]" alt="" />
        )}
        {/* <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-envelope-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
          />
        </svg> */}
      </div>
      <div className="text-white contacts container mx-auto flex flex-col md:flex-row justify-around">
        <div className="flex flex-col justify-start items-center mb-10 md:mb-0">
          <IoLocationSharp
            style={{ fontSize: "25px", color: "white", marginBottom: "10px" }}
          />
          <a>
            <p className="text-[18px] text-center">Tannenstrasse 16</p>

            <p className="text-[18px] text-center">8424 Embrach ZH</p>
            <p className="text-[18px] text-center">Switzerland</p>
          </a>
        </div>
        <div className="flex flex-col justify-start items-center mb-10 md:mb-0">
          <BsTelephoneFill
            style={{ fontSize: "22px", color: "white", marginBottom: "10px" }}
          />
          <a>
            <p className="text-[18px] whitespace-nowrap text-center">
              +41 44 589 70 55
            </p>

            <p className="text-[18px] whitespace-nowrap text-center">
              Mo - Fr 09:00 - 17:00
            </p>
          </a>
        </div>
        <div className="flex flex-col justify-start items-center mb-10 md:mb-0">
          <IoIosMail
            style={{ fontSize: "25px", color: "white", marginBottom: "10px" }}
          />
          <p className="text-[18px] text-center">info@swissenergyhub.com</p>

          <p className="text-[18px] text-center">www.swissenergyhub.com</p>
          <Link to="gtc" className="text-[18px] text-center cursor-pointer">
            GTC
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
