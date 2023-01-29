import React, { useState } from "react";
import styled from "styled-components";

import { Account } from "src/components/Header/ConnectWallet";
import { Icon } from "src/components/Icon/Icon";
import { Tooltip } from "src/components/Tooltip/Tooltip";

type Props = {
  account: Account;
  networkName?: string;
};

const ConnectView = ({ account, networkName }: Props) => {
  const address = account.address;
  const shortAddress = `${address.substring(1, 6)}...${address.substring(38)}`;
  const [textPopover, setTextPopover] = useState("Click to Copy");

  const onClickCopy = () => {
    navigator.clipboard.writeText(address);
    setTextPopover("Coped");
  };

  return (
    <BoxStyled>
      <Tooltip info={<p>Network: {networkName}</p>}>
        <Icon name="MetamaskLogo" />
      </Tooltip>
      <TestStyled>{shortAddress}</TestStyled>
      <Tooltip
        info={textPopover}
        onMouseLeave={() => setTextPopover("Click to Copy")}
      >
        <CopyBtnStyled onClick={onClickCopy}>
          <Icon name="CopyImg" />
        </CopyBtnStyled>
      </Tooltip>
    </BoxStyled>
  );
};

const BoxStyled = styled.div`
  width: 177px;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border-radius: 20px;
  padding: 10px 12px;
  gap: 8px;
`;

const TestStyled = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.xs};
  line-height: 16px;
`;
const CopyBtnStyled = styled.button`
  cursor: pointer;
  background: inherit;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ConnectView;
