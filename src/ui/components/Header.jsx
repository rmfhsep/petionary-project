import React, { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100vw;
  height: 100px;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #dedede;
  display: flex;
  justify-content: center;
`;

const HeaderWrapper = styled.div`
  width: 1280px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div``;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavBox = styled.div`
  display: flex;
  margin-right: 101px;
  div {
    height: 29px;
    color: #1f1f1f;
    font-size: 15px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.075px;
    margin-right: 40px;
    cursor: pointer;
  }
`;
const InfoBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Header = () => {
  const [select, setSelect] = useState(0);
  const [navMenu, setNavMevu] = useState([
    "Home",
    "Place",
    "Register",
    "Community",
  ]);

  console.log(select);

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo>
          <img src="./img/logo.svg" alt="로고" />
        </Logo>
        <NavWrapper>
          <NavBox>
            {navMenu.map((item, idx) => {
              return (
                <div
                  key={idx}
                  onClick={() => setSelect(idx)}
                  style={{
                    borderBottom: idx === select ? "1px solid #1f1f1f" : null,
                  }}
                >
                  {item}
                </div>
              );
            })}
          </NavBox>
          <InfoBox>
            <img
              src="./img/person.svg"
              alt="정보"
              style={{ marginRight: "28px" }}
            />
            <img src="./img/logout.svg" alt="로그아웃" />
          </InfoBox>
        </NavWrapper>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
