"use client";
import React, { useState } from "react";
import { SafeUser } from "../types";
import Container from "../components/Container";
import Link from "next/link";
import AccountInfoIcon from "../icon/AccountInfoIcon";
import AccountShieldIcon from "../icon/AccountShieldIcon";
import AccountPaymentIcon from "../icon/AccountPaymentIcon";
import AccountTaxesIcon from "../icon/AccountTaxesIcon";
import AccountNotificationIcon from "../icon/AccountNotificationIcon";
import AccountPrivacyIcon from "../icon/AccountPrivacyIcon";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import useRentModal from "../hooks/useRentModal";
import { BiUserCircle } from "react-icons/bi";
import AccountInfoMobileIcon from "../icon/accountMobile/AccountInfoMobileIcon";
import AccountSettingMobileIcon from "../icon/accountMobile/AccountSettingMobileIcon";
import useAccountSetting from "../hooks/useAccoutSetting";
import AccountSettingModal from "../components/modals/AccountSettingModal";
import AirbnbIcon from "../icon/AirbnbIcon";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AccountContactUsMobileIcon from "../icon/accountMobile/AccountContactUsMobileIcon";
import { signOut } from "next-auth/react";

interface AccountSetting {
  currentUser?: SafeUser | null;
}
const AccountSetting: React.FC<AccountSetting> = ({ currentUser }) => {
  const firstLetter = currentUser?.name?.charAt(0);
  const rentModal = useRentModal();
  const accountSettingModal = useAccountSetting();
  return (
    <div className=" md:px-14 mx-auto">
      <div className="mx-auto max-w-[1020px]   hidden md:block">
        <div className="my-[56px]">
          <h1 className="text-[#222222] font-bold text-[32px]">Account</h1>
          <div className="mt-2 flex items-center">
            <p className="font-bold text-[#000]">{currentUser?.name}</p>,{" "}
            {currentUser?.email}{" "}
            <Link href="/profile" className="ml-1 underline font-bold text-[#000]">
              Go to profile
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap items-center">
          <Link
            href="/account-settings/personal-info"
            className="p-4 mr-2 mb-2  min-h-[156px] flex flex-col justify-between rounded-xl  max-w-[320px]"
            style={{ boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.12)" }}
          >
            <div className="mb-4">
              <AccountInfoIcon />
            </div>
            <h3 className="text-[#222222] font-semibold text-lg mb-2">
              Person Info
            </h3>
            <p className="text-[#717171] font-normal text-sm">
              Provide personal details and how we can reach you
            </p>
          </Link>

          <Link
            href="/"
            className="p-4 mr-2 mb-2  min-h-[156px] flex flex-col justify-between rounded-xl w-[320px] max-w-[320px]"
            style={{ boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.12)" }}
          >
            <div className="mb-4">
              <AccountShieldIcon />
            </div>
            <h3 className="text-[#222222] font-semibold text-lg mb-2">
              Login & security
            </h3>
            <p className="text-[#717171] font-normal text-sm">
              Update your password and secure your account
            </p>
          </Link>

          <Link
            href="/"
            className="p-4 mr-2 mb-2  min-h-[156px] flex flex-col justify-between rounded-xl w-[320px] max-w-[320px]"
            style={{ boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.12)" }}
          >
            <div className="mb-4">
              <AccountPaymentIcon />
            </div>
            <h3 className="text-[#222222] font-semibold text-lg mb-2">
              Payment & payouts
            </h3>
            <p className="text-[#717171] font-normal text-sm">
              Provide personal details and how we can reach you
            </p>
          </Link>

          <Link
            href="/"
            className="p-4 mr-2 mb-2  min-h-[156px] flex flex-col justify-between rounded-xl w-[320px] max-w-[320px]"
            style={{ boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.12)" }}
          >
            <div className="mb-4">
              <AccountTaxesIcon />
            </div>
            <h3 className="text-[#222222] font-semibold text-lg mb-2">Taxes</h3>
            <p className="text-[#717171] font-normal text-sm">
              Manage taxpayer information and tax documents
            </p>
          </Link>

          <Link
            href="/"
            className="p-4 mr-2 mb-2  min-h-[156px] flex flex-col justify-between rounded-xl w-[320px] max-w-[320px]"
            style={{ boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.12)" }}
          >
            <div className="mb-4">
              <AccountNotificationIcon />
            </div>
            <h3 className="text-[#222222] font-semibold text-lg mb-2">
              Notifications
            </h3>
            <p className="text-[#717171] font-normal text-sm">
              Choose notification preferences and how you want to be contacted
            </p>
          </Link>

          <Link
            href="/"
            className="p-4 mr-2 mb-2  min-h-[156px] flex flex-col justify-between rounded-xl w-[320px] max-w-[320px]"
            style={{ boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.12)" }}
          >
            <div className="mb-4">
              <AccountPrivacyIcon />
            </div>
            <h3 className="text-[#222222] font-semibold text-lg mb-2">
              Privacy & sharing
            </h3>
            <p className="text-[#717171] font-normal text-sm">
              Manage your personal data, connected services, and data sharing
              settings
            </p>
          </Link>

          <Link
            href="/"
            className="p-4 mr-2 mb-2  min-h-[156px] flex flex-col justify-between rounded-xl w-[320px] max-w-[320px]"
            style={{ boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.12)" }}
          >
            <div className="mb-4">
              <AccountPrivacyIcon />
            </div>
            <h3 className="text-[#222222] font-semibold text-lg mb-2">
              Need help ?
            </h3>
            <p className="text-[#717171] font-normal text-sm">
              Manage your personal data, connected services, and data sharing
              settings
            </p>
          </Link>

          <Link
            href="/"
            className="p-4 mr-2 mb-2  min-h-[156px] flex flex-col justify-between rounded-xl w-[320px] max-w-[320px]"
            style={{ boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.12)" }}
          >
            <div className="mb-4">
              <AccountPrivacyIcon />
            </div>
            <h3 className="text-[#222222] font-semibold text-lg mb-2">
              Contact Us
            </h3>
            <p className="text-[#717171] font-normal text-sm">
            Manage your personal data, connected services, and data sharing
              settings
            </p>
          </Link>
        </div>
      </div>
      <Container>
        <div className="block md:hidden">
          <h1 className="mb-10 font-bold text-4xl">Profile</h1>
          <Link
            href="/profile"
            className="pb-4 flex items-center cursor-pointer"
            style={{ borderBottom: "1px solid #ccc" }}
          >
            <div className="grid place-items-center w-12 h-12 rounded-full bg-black text-white font-semibold">
              {firstLetter}
            </div>
            <div className="flex-1 ml-3">
              <p className="text-lg text-[#222222] mb-1">{currentUser?.name}</p>
              <p className="text-[#717171] text-sm">Show profile</p>
            </div>
            <AiOutlineRight />
          </Link>
          <div>
            <div
              onClick={rentModal.onOpen}
              className="rounded-2xl p-6 my-6 flex items-center justify-between cursor-pointer"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.12) 0px 6px 16px 0px, rgba(0, 0, 0, 0.04) 0px 0px 0px 1px",
              }}
            >
              <div className="flex-1">
                <h2 className="text-lg font-semibold mb-2 text-[#000]">
                  Airbnb your place
                </h2>
                <p className="text-[#717171]  text-sm font-normal">
                  It&apos;s simple to get set up and start earning
                </p>
              </div>
              <Image
                src="/images/accountairbnb.jpg"
                alt="m"
                width={100}
                height={100}
              />
            </div>
            <div className="mt-10" style={{ borderBottom: "1px solid #ccc" }}>
              <Link
                href="/account-settings/personal-info"
                className="flex items-center mb-5 cursor-pointer  text-lg"
              >
                <AccountInfoMobileIcon />
                <p className="flex-1 text-[#222222] ml-3">Personal info</p>
                <AiOutlineRight className="text-[20px] font-light" />
              </Link>
              <div
                onClick={accountSettingModal.onOpen}
                className="flex cursor-pointer items-center mb-5 w-full  text-lg"
              >
                <AccountSettingMobileIcon />
                <p className="flex-1 text-[#222222] ml-3">Account</p>
                <AiOutlineRight className="text-[20px] font-light" />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="mb-10 font-bold text-2xl">Support</h1>
            <div>
              <div className="mt-10" style={{ borderBottom: "1px solid #ccc" }}>
                <Link
                  href="/"
                  className="flex items-center mb-5 cursor-pointer  text-lg"
                >
                  <AirbnbIcon />
                  <p className="flex-1 text-[#222222] ml-3">How Airbnb Work ?</p>
                  <AiOutlineRight className="text-[20px] font-light" />
                </Link>
                <Link
                  href="/"
                  className="flex cursor-pointer items-center mb-5 w-full  text-lg"
                >
                  <HelpOutlineIcon />
                  <p className="flex-1 text-[#222222] ml-3">Get Help</p>
                  <AiOutlineRight className="text-[20px] font-light" />
                </Link>
                <Link
                  href="/"
                  className="flex cursor-pointer items-center mb-5 w-full justify-between  text-lg"
                >
                  <AccountContactUsMobileIcon />
                 <div className="ml-3 flex-1 ">
                    <p className="text-[#222222] ">Contact Us</p>
                    <div className="text-[#717171] text-xs font-normal">Let our team know about concerns related to home sharing activity in your area.</div>
                 </div>
                  <AiOutlineRight className="text-[20px] font-light" />
                </Link>
              </div>
            </div>
          </div>
          <footer className="mt-5">
            <button  onClick={() => signOut()} className="w-full text-[#000] border-black rounded-lg bg-transparent hover:bg-[#fafafa] py-3" style={{border:"1px solid #000"}}>Log Out</button>
          </footer>
        </div>
      </Container>
      <AccountSettingModal />
    </div>
  );
};

export default AccountSetting;
