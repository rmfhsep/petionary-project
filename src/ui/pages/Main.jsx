import React, { ReactNode, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const MainWrapper = styled.div`
  width: 1280px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Slogun = styled.div`
  font-weight: 700;
  font-size: 100px;
  line-height: 120px;
  letter-spacing: -0.5px;
`;

const ViewMore = styled.div`
  margin-top: 80px;
  display: flex;
  color: #ff9666;
  font-size: 15px;
  line-height: 22px;
`;

const Main = () => {
  return (
    <Container>
      <MainWrapper>
        <Slogun>
          <div>For memory the place</div>
          <div>with my pet, together</div>
          <div>PETIONARY</div>
        </Slogun>
        <ViewMore>
          <span>view more</span>
          <img src="./img/arrow.svg" style={{ width: "20px" }} />
        </ViewMore>
      </MainWrapper>
    </Container>
  );
};

export default Main;
