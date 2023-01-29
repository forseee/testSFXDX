import styled, { keyframes } from "styled-components";

export const Circles = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;
  z-index: -1;
`;

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Li = styled.li<{
  bg: string;
  left?: string;
  rotate: number;
  right?: string;
  top?: string;
}>`
  left: ${(props) => {
    if (props.right) {
      return "auto";
    }
    return props.left;
  }};
  right: ${(props) => {
    if (props.left) {
      return "auto";
    }
    return props.right;
  }};
  top: ${(props) => props.top};

  position: absolute;
  display: block;
  list-style: none;
  width: 30%;
  height: 40%;
  border-radius: 30%;
  opacity: 0.15;
  filter: blur(100px);
  background: ${(props) => props.bg};
  transform: rotate(${(props) => props.rotate}deg);
  animation: ${animation} 10s linear infinite;
`;
