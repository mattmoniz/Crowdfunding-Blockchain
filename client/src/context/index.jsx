import React, { useContext, createContext } from "react";

import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0x4E33846C2e49f82323506017C658a0f1001ACd57"
  );
  const {mutateAsync: createCampaign} = useContractWrite(contract,'createCampaign');

  const address = useAddress();
  const connect = useMetamask();

  const publishCampaign = async (form) => {

    try {
        const data = await createCampaign([
            address,
            form.title,
            form.description,
            form.target,
            new Date(form.deadline).getTime(),
            form.image
        ])

        console.log("contract call success", data);

    } catch (error) {
        console.log("contract call failure", error);

    }
  }

  return (
    <StateContext.Provider

    value={{
    address,
    contract,
    connect,
    reateCampaign:publishCampaign,
    }}>

    {children}

    </StateContext.Provider>
  )

};

export const useStateContext = () => useContext(StateContext);
