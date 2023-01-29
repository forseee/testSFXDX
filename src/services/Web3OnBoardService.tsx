import React, { ReactNode } from "react";
import { init, Web3OnboardProvider } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";

import LogoSFXDX from "src/components/Icon/Logo";

const INFURA_ID = "c74948b474794119af5402f90eac102c";
const injected = injectedModule();

const wallets = [injected];

export const chains = [
  {
    id: "0x1",
    token: "ETH",
    label: "Ethereum Mainnet",
    rpcUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
  },
  {
    id: "0x5",
    token: "ETH",
    label: "Goerli",
    rpcUrl: `https://goerli.infura.io/v3/${INFURA_ID}`,
  },
];

const appMetadata = {
  name: "SFXDX",
  icon: LogoSFXDX,
  description: "Example showcasing how to connect a wallet.",
  recommendedInjectedWallets: [
    { name: "MetaMask", url: "https://metamask.io" },
    { name: "Coinbase", url: "https://wallet.coinbase.com/" },
  ],
};

const accountCenter = {
  desktop: {
    enabled: false,
  },
  mobile: {
    enabled: false,
  },
};

const connect = {
  showSidebar: true,
};

const web3Onboard = init({
  wallets,
  chains,
  appMetadata,
  accountCenter,
  connect,
});

type Props = {
  children: ReactNode;
};

const Web3OnBoardService = ({ children }: Props) => {
  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      {children}
    </Web3OnboardProvider>
  );
};

export default Web3OnBoardService;
