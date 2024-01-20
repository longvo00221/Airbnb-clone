"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsFillMapFill } from "react-icons/bs";

const ShowMap = () => {
  const router = useRouter();
  const path = usePathname();
  const pathname = path?.split("/")[1];
  return (
    <>
      {pathname === "map" ? (
        <button
        onClick={()=>router.push("/")}
          className="showmap bg-[#222222] z-50 text-sm font-semibold fixed transition-transform duration-150 ease-out left-1/2 translate-x-[-50%] bottom-[100px] w-auto flex items-center rounded-3xl px-[14px] py-[15px] hover:scale-105 text-white touch-manipulation"
          style={{
            transition:
              "-ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s !important",
          }}
        >
          <span className="">Show List </span><AiOutlineUnorderedList className="ml-3" />
        </button>
      ) : (
        <button
          onClick={() => router.push("/map")}
          className="showmap bg-[#222222] z-50 text-sm font-semibold fixed transition-transform duration-150 ease-out left-1/2 translate-x-[-50%] bottom-[100px] w-auto flex items-center rounded-3xl px-[14px] py-[15px] hover:scale-105 text-white touch-manipulation"
          style={{
            transition:
              "-ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s !important",
          }}
        >
          <span className="">Show Map </span>
          <BsFillMapFill className="ml-3" />
        </button>
      )}
    </>
  );
};

export default ShowMap;
