import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/swiss-logo.jpg";
import { IoLocationSharp } from "react-icons/io5";
import { BsInstagram, BsTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const sidebarLinks = [
  {
    link: "energy",
  },
  {
    link: "recycling",
  },
  {
    link: "pellets",
  },
  {
    link: "hydrogen",
  },
  {
    link: "knowledge",
  },
  {
    link: "about",
  },
];
const Aside = ({ scrollPosition, screenWidth, navbarColor }) => {
  const [menuActive, setMenuActive] = useState(false);

  const activeHandler = () => setMenuActive(!menuActive);
  return (
    <nav
      className=" h-[100px] px] md:mx-0  flex items-center fixed w-[100%] z-20 "
      style={{
        backgroundColor: screenWidth <= 767 ? navbarColor : "transparent",
        transition: "all .3s ease-in",
        boxShadow:
          screenWidth <= 767
            ? scrollPosition > 100
              ? "0px 15px 45px #00000038"
              : "none"
            : "none",

        height: scrollPosition > 100 ? "70px" : "100px",
      }}
    >
      <style jsx="true">
        {`
          .border-top {
            clip-path: polygon(0 0, 100% 0%, 100% 100%, 15% 100%);
            z-index: 33;
            transition: all 0.5s linear;
            width: 200px;
          }
          .border-top.active {
            width: 0px;
            transition: all 0.5s linear 0.3s;
          }
          .border-right {
            clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 85%);
            z-index: 33;
            transition: all 0.7s linear;
          }
          .border-right.active {
            clip-path: none;
            height: 100vh;
          }
          aside {
            transition: all 0.5s ease-in-out 0.4s;
          }
          aside.active {
            transition: all 0.5s ease-in-out 0s;
          }

          .hamburger-react[aria-expanded="false"] > div:first-of-type div {
            width: 24px !important;
          }

          .hamburger-react[aria-expanded="false"] > div:last-of-type div {
            width: 15px !important;
          }
          .sidebar-ul a[aria-current="page"] {
            color: #c00000 !important;
          }
        `}
      </style>

      <div className="container px-3 mx-auto">
        <div className="borders-container">
          <div
            className={`border-top   ${
              menuActive ? "active" : ""
            }    bg-[#fff] fixed right-[20px] top-0 h-[20px]`}
          ></div>
          <div
            className={`border-right w-[20px] h-[200px] bg-[#fff] fixed right-0 top-0   ${
              menuActive ? "active" : ""
            }  `}
          ></div>
        </div>

        <div className="navbar_inner   flex justify-between">
          <Link to="/">
            <img src={logo} alt="logo" width={85} />
          </Link>
          <div className="sidebar-container z-50" onClick={activeHandler}>
            <button
              className={`hamburger-menu flex flex-col gap-2 outline-0 ${
                menuActive && "translate-y-2"
              }
              transition-all delay-[2000]}
               `}
            >
              <Hamburger toggled={menuActive} toggle={setMenuActive} />
            </button>
          </div>
        </div>
      </div>
      <aside
        className={`bg-[#fff] w-[100%] max-w-[450px] fixed right-0 h-[100vh] top-0 px-4 py-4  ${
          !menuActive ? "right-[-450px]  active" : "  right-0"
        } flex flex-col    justify-center  `}
      >
        <div className="flex   flex-col">
          <ul className="sidebar-ul">
            {sidebarLinks.map(({ link }, index) => {
              return (
                <li
                  className="mb-2 text-sm sm:text-base font-bold "
                  key={index}
                >
                  <NavLink
                    to={`/${link}`}
                    className="capitalize  hover:text-[#c00000]"
                  >
                    {link}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <ul className="my-4">
            <li className="flex gap-3 items-center text-sm text-[#333] mb-2">
              <IoLocationSharp
                style={{
                  fontSize: "25px",
                  color: "#555",
                }}
              />
              Tannenstrasse 16 8424 Embrach ZH Switzerland
            </li>
            <li className="mb-2 text-sm">
              <a
                className="flex gap-3 text-[#333] transition-all duration-75 ease-in-out hover:text-black "
                href="tel:+41 44 589 70 55"
              >
                <BsTelephoneFill
                  style={{
                    fontSize: "18px",
                  }}
                />
                +41 44 589 70 55
              </a>
            </li>
            <li>
              <a
                className="flex gap-3 text-[#333] transition-all duration-75 ease-in-out hover:text-black text-sm "
                href="mailto:info@swissenergyhub.com"
              >
                <IoIosMail
                  style={{
                    fontSize: "20px",
                  }}
                />
                info@swissenergyhub.com
              </a>
            </li>
          </ul>
        </div>

        <ul className="social-media flex gap-4 mt-4">
          <li>
            <Link to="/">
              <FaFacebookF className="mb-4  text-[17px]" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaLinkedinIn className="mb-4  text-[17px]" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <BsInstagram className="mb-4  text-[17px]" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <AiOutlineTwitter className="mb-4  text-[17px]" />
            </Link>
          </li>
        </ul>
      </aside>
    </nav>
  );
};
export default Aside;
