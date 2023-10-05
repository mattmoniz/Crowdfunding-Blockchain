import React, { useState, useEffect } from "react";
import { useStateContext } from "../context";
import { DisplayCampaigns } from "../components";

const Profile = () => {
const [isLoading, setIsLoading] = useState(false);
const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getUserCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);



  return (
    <DisplayCampaigns
      isLoading={isLoading}
      campaigns={campaigns}
      title={
        !isLoading &&
        campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
          </p>
        )
      }
    />
  );
};

export default Profile;
