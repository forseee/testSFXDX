import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "src/assets/styles/globals";
import { defaultTheme } from "src/assets/styles/theme";
import AnimationBg from "src/components/AnimationBg";
import Router from "src/Router";
import Web3OnBoardService from "src/services/Web3OnBoardService";

const App = () => {
  return (
    <Web3OnBoardService>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <AnimationBg />
        <Router />
      </ThemeProvider>
    </Web3OnBoardService>
  );
};

export default App;
