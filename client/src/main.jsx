import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider, ConnectWallet } from "@thirdweb-dev/react";
import { StateContextProvider } from "./context";
import App from "./App";

import "./index.css";
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider activeChain="goerli" desiredChainId={ChainId.Goerli}>
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);
