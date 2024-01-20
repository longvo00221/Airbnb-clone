import Link from "next/link";
import React from "react";

const NavHead = () => {
  return (
    <div
      className="bg-[#f7f7f7] transition-all ease-out w-full absolute top-0 z-10"
      style={{ boxShadow: "inset 0 -1px 0 rgb(0,0,0,0.06)" }}
    >
      <div className="px-10 h-full py-5 flex justify-center items-center max-w-[1664px]">
        <p className="text-[#222222] text-base font-semibold mr-2">Show total prices up front</p>
        <Link className="underline text-[#2222222] text-sm " href="">Learn more</Link>
      </div>
    </div>
  );
};

export default NavHead;
