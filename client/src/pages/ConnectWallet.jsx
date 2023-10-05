import React from "react";
import { FundCard, CustomButton, Loader } from "../components";
import { thirdweb } from "../assets";
import { v4 as uuidv4 } from "uuid";

const ConnectWallet = () => {
  const handleClick = () =>{
    window.open("https://thirdweb.com/dashboard", '_blank');
  }

  return (
    <div
      className="sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer"
      onClick={handleClick}
    >
      <img src={thirdweb} alt="thirdweblogo" />
      <div className="flex flex-col p-4">
        <h3 className="font-epilogue font-semibold text-[16px] text-white text-center leading-[26px] truncate">
          Get Familiar with Thirdweb
        </h3>
      </div>
    </div>
  );
};

export default ConnectWallet;
