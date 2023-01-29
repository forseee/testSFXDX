import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Footer from "src/components/Footer";
import Header from "src/components/Header";
import Web3OnBoardService from "src/services/Web3OnBoardService";

const Layout = () => {
  return (
    <Web3OnBoardService>
      <Wrapper>
        <Header />
        <Outlet />
        <Footer />
      </Wrapper>
    </Web3OnBoardService>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;

export default Layout;
