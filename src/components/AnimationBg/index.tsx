import React from "react";

import * as Styled from "./styles";

const AnimationBg = () => {
  return (
    <Styled.Circles>
      <Styled.Li bg="#B2F1DE" left="15%" rotate={-65} top="10%"></Styled.Li>
      <Styled.Li bg="#3AC922" right="15%" rotate={-135} top="10%"></Styled.Li>
      <Styled.Li bg="#3AC922" left="15%" rotate={-65} top="65%"></Styled.Li>
      <Styled.Li bg="#B2F1DE" right="15%" rotate={-135} top="65%"></Styled.Li>
    </Styled.Circles>
  );
};

export default AnimationBg;
