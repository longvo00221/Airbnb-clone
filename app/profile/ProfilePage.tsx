"use client";
import React from "react";
import { SafeUser } from "../types";
import Container from "../components/Container";
import ProfileShieldIcon from "../icon/profile/ProfileShieldIcon";
import CheckIcon from "@mui/icons-material/Check";
import moment from "moment";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";
import { GiDivert } from "react-icons/gi";
interface Profile {
  currentUser?: SafeUser | null;
}
const ProfilePage: React.FC<Profile> = ({ currentUser }) => {
  const firstLetter = currentUser?.name?.charAt(0);

  return (
    <div className="px-10 lg:px-28">
      <div className="lg:flex block">
        <div className="rounded-xl hidden lg:block p-5 max-w-[308px] md:border-solid md:border">
          <div className="grid place-items-center mx-auto mb-10 w-24 h-24 rounded-full text-3xl bg-black text-white font-semibold">
            {firstLetter}
          </div>
          <ProfileShieldIcon />
          <div
            className="mt-5 pb-10"
            style={{ borderBottom: "1px solid #ccc" }}
          >
            <h2 className="font-bold text-lg mb-2">Identity verification</h2>
            <p className="mb-2 font-semibold text-[#717171] text-base ">
              Show others you’re really you with the identity verification
              badge.
            </p>
            <button
              className="text-black font-bold rounded-md py-2 px-3"
              style={{ border: "1px solid #000" }}
            >
              Get the badge
            </button>
          </div>
          <div className="py-10">
            <h2 className="font-extrabold text-xl mb-2">
              {currentUser?.name} Comfirmed
            </h2>
            <div className="flex items-center ">
              <CheckIcon className="mr-3" />
              Email address
            </div>
          </div>
        </div>
        <div className="lg:flex-1 flex-2 lg:ml-14">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-bold text-3xl">
                Hi, I&apos;m {currentUser?.name}
              </h1>
              <Link
                className="text-[#000] underline mt-4 block font-bold"
                href="/account-settings/personal-info"
              >
                Edit Profile
              </Link>
            </div>
            <div>
              <div className="grid lg:hidden place-items-center mx-auto mb-10 w-16 h-16 rounded-full text-3xl bg-black text-white font-semibold">
                {firstLetter}
              </div>
            </div>
          </div>
          <p className="text-[#717171] text-base my-5">
            Joined in {moment(currentUser?.createdAt).format("ll")}
          </p>
          <div className="my-10 font-bold text-2xl hidden lg:flex items-center">
            <StarIcon sx={{ marginRight: "18px" }} />0 reviews
          </div>
          <div className="block lg:hidden">
          <ProfileShieldIcon />
          <div
            className="mt-5 pb-10"
            style={{ borderBottom: "1px solid #ccc" }}
          >
            <h2 className="font-bold text-lg mb-2">Identity verification</h2>
            <p className="mb-2 font-semibold text-[#717171] text-base ">
              Show others you’re really you with the identity verification
              badge.
            </p>
            <button
              className="text-black font-bold rounded-md py-2 px-3"
              style={{ border: "1px solid #000" }}
            >
              Get the badge
            </button>
          </div>
          <div className="py-10">
            <h2 className="font-extrabold text-xl mb-2">
              {currentUser?.name} Comfirmed
            </h2>
            <div className="flex items-center ">
              <CheckIcon className="mr-3" />
              Email address
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
