import React, { ReactNode, useEffect } from "react";
import styled from "styled-components";
import Header from "./ui/components/Header";
const Wrapper = styled.main`
  width:100vw;
  height: 100%;
  background-color: white
  display: grid;
  place-items: center;
  overflow: hidden;

`;

const Wrap = ({ children }) => {
  return (
    <Wrapper id="shorts-wrapper">
      <Header />
      {children}
    </Wrapper>
  );
};

export default Wrap;
