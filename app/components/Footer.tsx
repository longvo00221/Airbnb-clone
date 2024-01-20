import React from "react";
import Container from "./Container";
import { AiOutlineGlobal } from "react-icons/ai";
import NavMobile from "./NavMobile";
import { SafeUser } from "../types";
interface UserMenuProps {
    currentUser?: SafeUser | null
  }
const Footer:React.FC<UserMenuProps> = ({
    currentUser
}) => {
  return (
    <div className="fixed bottom-0 shadow-md z-10  bg-white w-full py-3 h-auto ">
        <NavMobile currentUser={currentUser}/>
      <div className="hidden md:flex lg:flex items-center h-full justify-between max-w-[2520px] mx-auto xl:px-20  md:px-10 sm:px-2 px-4 ">
        <div className="flex flex-wrap items-center space-x-2 gap-1">
          <p>© 2023 Airbnb, Inc.</p>
          <span>·</span>
          <p>Terms</p>
          <span>·</span>
          <p>Sitemap</p>
          <span>·</span>
          <p>Privacy</p>
          <span>·</span>
          <p>Your Privacy Choices</p>
          <div>
            <svg width="26" height="12" fill="none">
              <rect
                x="0.5"
                y="0.5"
                width="25"
                height="11"
                rx="5.5"
                fill="#fff"
              ></rect>
              <path d="M14 1h7a5 5 0 010 10H11l3-10z" fill="#06F"></path>
              <path
                d="M4.5 6.5l1.774 1.774a.25.25 0 00.39-.049L9.5 3.5"
                stroke="#06F"
                stroke-linecap="round"
              ></path>
              <path
                d="M16.5 3.5L19 6m0 0l2.5 2.5M19 6l2.5-2.5M19 6l-2.5 2.5"
                stroke="#fff"
                stroke-linecap="round"
              ></path>
              <rect
                x="0.5"
                y="0.5"
                width="25"
                height="11"
                rx="5.5"
                stroke="#06F"
              ></rect>
            </svg>
          </div>
          <span>·</span>
          <p>Destinations</p>
        </div>
        <div className="flex items-center flex-wrap  justify-between gap-2">
          <div className="flex items-center gap-1">
            <AiOutlineGlobal />
            <p>English(US)</p>
          </div>
          <div className="flex items-center gap-1">
            <span>đ</span>
            <p>VND</p>
          </div>
          <div className="flex items-center gap-1">Support & resources</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
