"use client";
import { SafeUser } from "@/app/types";
import Link from "next/link";
import React from "react";
import useAccountSetting from "@/app/hooks/useAccoutSetting";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
const AccountSettingModal = () => {
  const accountSettingModal = useAccountSetting();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    height: "100%",
    overflow: "auto",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={accountSettingModal.isOpen}
        onClose={accountSettingModal.onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={accountSettingModal.isOpen}>
          <Box sx={style}>
            <div className="my-[56px]">
                <Button onClick={accountSettingModal.onClose} className="px-4 py-3 text-[#000] ml-[-20px!important] hover:transparent"><KeyboardArrowLeftIcon/></Button>
              <h1 className="text-[#222222] font-bold text-[32px]">Account</h1>
            </div>
            <div className="grid grid-cols-1">
              <Link
                href="/"
                className="pr-4 pt-4 pb-4 mr-2 mb-2 flex items-center justify-between "
                style={{ borderBottom: "1px solid #ccc" }}
              >
                <div>
                  <h3 className="text-[#222222] font-semibold text-lg mb-2">
                    Person Info
                  </h3>
                  <p className="text-[#717171] font-normal text-sm">
                    Provide personal details and how we can reach you
                  </p>
                </div>
                <KeyboardArrowRightIcon />
              </Link>

              <Link
                href="/"
                className="pr-4 pt-4 pb-4 mr-2 mb-2 flex items-center justify-between "
                style={{ borderBottom: "1px solid #ccc" }}
              >
                <div>
                  <h3 className="text-[#222222] font-semibold text-lg mb-2">
                    Login & security
                  </h3>
                  <p className="text-[#717171] font-normal text-sm">
                    Update your password and secure your account
                  </p>
                </div>
                <KeyboardArrowRightIcon />
              </Link>

              <Link
                href="/"
                className="pr-4 pt-4 pb-4 mr-2 mb-2 flex items-center justify-between "
                style={{ borderBottom: "1px solid #ccc" }}
              >
                <div>
                  <h3 className="text-[#222222] font-semibold text-lg mb-2">
                    Payment & payouts
                  </h3>
                  <p className="text-[#717171] font-normal text-sm">
                    Provide personal details and how we can reach you
                  </p>
                </div>
                <KeyboardArrowRightIcon />
              </Link>

              <Link
                href="/"
                className="pr-4 pt-4 pb-4 mr-2 mb-2 flex items-center justify-between "
                style={{ borderBottom: "1px solid #ccc" }}
              >
                <div>
                  <h3 className="text-[#222222] font-semibold text-lg mb-2">
                    Taxes
                  </h3>
                  <p className="text-[#717171] font-normal text-sm">
                    Manage taxpayer information and tax documents
                  </p>
                </div>
                <KeyboardArrowRightIcon />
              </Link>

              <Link
                href="/"
                className="pr-4 pt-4 pb-4 mr-2 mb-2 flex items-center justify-between "
                style={{ borderBottom: "1px solid #ccc" }}
              >
                <div>
                  <h3 className="text-[#222222] font-semibold text-lg mb-2">
                    Notifications
                  </h3>
                  <p className="text-[#717171] font-normal text-sm">
                    Choose notification preferences and how you want to be
                    contacted
                  </p>
                </div>
                <KeyboardArrowRightIcon />
              </Link>

              <Link
                href="/"
                className="pr-4 pt-4 pb-4 mr-2 mb-2 flex items-center justify-between "
                style={{ borderBottom: "1px solid #ccc" }}
              >
                <div>
                  <h3 className="text-[#222222] font-semibold text-lg mb-2">
                    Privacy & sharing
                  </h3>
                  <p className="text-[#717171] font-normal text-sm">
                    Manage your personal data, connected services, and data
                    sharing settings
                  </p>
                </div>
                <KeyboardArrowRightIcon />
              </Link>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default AccountSettingModal;
