import React, { useEffect, useState } from "react";
import { useConnectWallet, useSetChain, useWallets } from "@web3-onboard/react";

import Button from "src/components/Button";
import ConnectView from "src/components/ConnectView/ConnectView";
import { chains } from "src/services/Web3OnBoardService";

export type Account = {
  address: string;
};

export const ConnectWallet = () => {
  const [{ wallet, connecting }, connect] = useConnectWallet();
  const [account, setAccount] = useState<Account | null>(null);
  const connectedWallets = useWallets();
  const [{ connectedChain }] = useSetChain();
  const previouslyConnectedWallets = JSON.parse(
    window.localStorage.getItem("connectedWallets")
  );
  const fullConnectedChain = chains.find(
    (item) => item.id === connectedChain?.id
  );

  useEffect(() => {
    if (wallet?.provider) {
      setAccount({
        address: wallet.accounts[0].address,
      });
    }
  }, [wallet]);

  useEffect(() => {
    async function setWalletFromLocalStorage() {
      if (previouslyConnectedWallets?.length) {
        await connect({
          autoSelect: previouslyConnectedWallets[0],
        });
      }
    }
    setWalletFromLocalStorage();
  }, [connect]);

  useEffect(() => {
    if (!connectedWallets.length) return;

    const connectedWalletsLabelArray = connectedWallets.map(({ label }) => ({
      label,
      disableModals: true,
    }));

    window.localStorage.setItem(
      "connectedWallets",
      JSON.stringify(connectedWalletsLabelArray)
    );
  }, [wallet]);

  if (wallet?.provider && account) {
    return (
      <ConnectView account={account} networkName={fullConnectedChain.label} />
    );
  }

  return (
    <Button
      disabled={connecting}
      onClick={() => connect()}
    >
      Connect Wallet
    </Button>
  );
};
