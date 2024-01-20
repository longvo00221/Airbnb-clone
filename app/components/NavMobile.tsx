"use client";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiSearch, BiUserCircle } from "react-icons/bi";
import useLoginModal from "../hooks/useLoginModal";
import { SafeUser } from "../types";
import useSearchModal from "../hooks/useSearchModal";
import { useRouter } from "next/navigation";
import AirbnbIcon from "../icon/AirbnbIcon";
import UserIcon from "../icon/UserIcon";
import { TbPlaneInflight } from "react-icons/tb";
interface UserMenuProps {
  currentUser?: SafeUser | null;
}
const NavMobile: React.FC<UserMenuProps> = ({ currentUser }) => {
  const loginModal = useLoginModal();
  const searchModal = useSearchModal();
  const router = useRouter();
  return (
    <div className="max-w-[2520px] flex md:hidden items-center justify-center mx-auto xl:px-20  md:px-10 sm:px-2 px-5 ">
      <div
        onClick={()=>router.push('/')}
        className="flex mx-4 flex-col cursor-pointer justify-center items-center"
      >
        <BiSearch className="h-6 w-6" />
        <p className="text-xs font-semibold text-[#222222]">Search</p>
      </div>
      <div
        onClick={() => router.push("/favorites")}
        className="flex mx-4 flex-col cursor-pointer justify-center items-center"
      >
        <AiOutlineHeart className="h-6 w-6" />
        <p className="text-xs font-semibold text-[#222222]">Favorite</p>
      </div>
      {!currentUser ? (
        <div
          onClick={loginModal.onOpen}
          className="flex mx-4 flex-col cursor-pointer justify-center items-center"
        >
          <BiUserCircle className="h-6 w-6" />

          <p className="text-xs font-semibold text-[#222222]">Login</p>
        </div>
      ) : (
        <div className="flex items-center">
          <div
            onClick={() => router.push("/trips")}
            className="flex mx-4 flex-col cursor-pointer justify-center items-center"
          >
            <AirbnbIcon/>
            <p className="text-xs font-semibold text-[#222222]">Trips</p>
          </div>
          <div
            onClick={() => router.push("/reservations")}
            className="flex mx-4 flex-col cursor-pointer justify-center items-center"
          >
            <TbPlaneInflight className="h-6 w-6"/>
            <p className="text-xs font-semibold text-[#222222]">Reservations</p>
          </div>
          <div
            onClick={() => router.push("/account-settings")}
            className="flex mx-4 flex-col cursor-pointer justify-center items-center"
          >
            <UserIcon/>
            <p className="text-xs font-semibold text-[#222222]">Profile</p>
          </div>
          

        </div>
      )}
    </div>
  );
};

export default NavMobile;
