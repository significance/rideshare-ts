import { useWeb3React } from "@web3-react/core";

import React from "react";

import "./App.css";
import { InjectedConnector } from "@web3-react/injected-connector";

import { useWeb3React } from "@web3-react/core";

const injectedConnector = new InjectedConnector({
  supportedChainIds: [100],
});

const App = () => {
  const context = useWeb3React();
  const web3React = useWeb3React();

  const { activate } = context;

  return (
    <button
      onClick={() => {
        activate(injectedConnector);
      }}
    >
      Click to activate
    </button>
  );
};

export default App;
