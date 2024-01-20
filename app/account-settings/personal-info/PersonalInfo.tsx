"use client";
import Container from "../../components/Container";
import Link from "next/link";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { SafeUser } from "../../types";
import LockShieldInfo from "../../icon/LockShieldInfo";
import LockInfo from "../../icon/LockInfo";
import EyesInfo from "../../icon/EyesInfo";
interface PersonalInfoPage {
  currentUser?: SafeUser | null;
}
const PersonalInfo: React.FC<PersonalInfoPage> = ({ currentUser }) => {
  const path = usePathname();
  const pathname = path?.split("/")[1];
  const email = currentUser?.email;
  const emailMasked = email?.replace(/(.)(.*)(.)(?=@)/, "$1*****$3");
  return (
    <Container>
      <div>
        <div className="my-[40px]">
          <div className=" items-center hidden md:flex text-[#484848] font-semibold ">
            <Link href="/account-settings">Account</Link>
            <div className="mx-5">
              <AiOutlineRight />
            </div>
            <Link className="capitalize text-[#000]" href="/">
              {pathname?.split("-").join(" ")}
            </Link>
          </div>
          <Link href="/account-settings" ><AiOutlineLeft className="block md:hidden lg:hidden mb-6" /></Link>
          <h1 className="mt-2 text-[#484848] text-2xl lg:text-3xl font-extrabold">
            Personal info
          </h1>
        </div>
        <div className="flex">
          <div className="w-full sm:w-[58.3%]">
            {/* name */}
            <div
              className="flex items-center justify-between w-full py-6"
              style={{ borderBottom: "1px solid #ccc" }}
            >
              <div>
                <h3>Legal name</h3>
                <p className="text-[#717171] text-sm">{currentUser?.name}</p>
              </div>
              <button className="underline text-[#000] font-extrabold">
                Edit
              </button>
            </div>
            {/* email */}
            <div
              className="flex items-center justify-between w-full py-6"
              style={{ borderBottom: "1px solid #ccc" }}
            >
              <div>
                <h3>Email Address</h3>
                <p className="text-[#717171] text-sm">{emailMasked}</p>
              </div>
              <button className="underline text-[#000] font-extrabold">
                Edit
              </button>
            </div>
            {/* phone */}
            <div
              className="flex items-center justify-between w-full py-6"
              style={{ borderBottom: "1px solid #ccc" }}
            >
              <div>
                <h3>Phone Number</h3>
                <p className="text-[#717171] text-sm">
                  Add a number so confirmed guests and Airbnb can get in touch.
                  You can add other numbers and choose how they’re used.
                </p>
              </div>
              <button className="underline text-[#000] font-extrabold">
                Edit
              </button>
            </div>
            {/* govermentid */}
            <div
              className="flex items-center justify-between w-full py-6"
              style={{ borderBottom: "1px solid #ccc" }}
            >
              <div>
                <h3>Government ID</h3>
                <p className="text-[#717171] text-sm">Not provided</p>
              </div>
              <button className="underline text-[#000] font-extrabold">
                Edit
              </button>
            </div>
            {/* address */}
            <div
              className="flex items-center justify-between w-full py-6"
              style={{ borderBottom: "1px solid #ccc" }}
            >
              <div>
                <h3>Address</h3>
                <p className="text-[#717171] text-sm">Not provided</p>
              </div>
              <button className="underline text-[#000] font-extrabold">
                Edit
              </button>
            </div>
            {/* emergency */}
            <div
              className="flex items-center justify-between w-full py-6"
              style={{ borderBottom: "1px solid #ccc" }}
            >
              <div>
                <h3>Emergency Phone</h3>
                <p className="text-[#717171] text-sm">Not provided</p>
              </div>
              <button className="underline text-[#000] font-extrabold">
                Edit
              </button>
            </div>
          </div>
          <div
            className="hidden sm:block sm:w-[33.3333%] ml-[8.3333%] float-left rounded-2xl"
            style={{ border: "1px solid #ccc" }}
          >
            <div className="p-6">
              <div className="pb-4" style={{ borderBottom: "1px solid #ccc" }}>
                <LockShieldInfo />
                <h1 className="font-extrabold text-xl mt-4">
                  Why isn’t my info shown here?
                </h1>
                <p className="mt-4 text-base text-[#717171]">
                  We’re hiding some account details to protect your identity.
                </p>
              </div>
            </div>
            <div className="p-6">
              <div className="pb-4" style={{ borderBottom: "1px solid #ccc" }}>
                <LockInfo />
                <h1 className="font-extrabold text-xl mt-4">
                  Which details can be edited?
                </h1>
                <p className="mt-4 text-base text-[#717171]">
                  Details Airbnb uses to verify your identity can’t be changed.
                  Contact info and some personal details can be edited, but we
                  may ask you verify your identity the next time you book or
                  create a listing.
                </p>
              </div>
            </div>
            <div className="p-6">
              <div className="pb-4" >
                <EyesInfo />
                <h1 className="font-extrabold text-xl mt-4">
                What info is shared with others?
                </h1>
                <p className="mt-4 text-base text-[#717171]">
                Airbnb only releases contact information for Hosts and guests after a reservation is confirmed.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PersonalInfo;
