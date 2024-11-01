import Footer from "./components/CopyRightAndSns";
import OpenTicketList from "./components/OpenTicketList";
import AutoScrollUp from "./components/AutoScrollUp";
import LogoImage from "./components/LogoImage";
import styled from "styled-components";

// 모든 컴포넌트 중앙 정렬
const MakeDivPlaceCenter = styled.div`
  margin: 0 auto;
  width: 1500px;
`;

const App = () => {
  return (
    <MakeDivPlaceCenter>
      {/* 로고 이미지*/}
      <LogoImage />
      <OpenTicketList />
      <AutoScrollUp />
      {/* <Copyright /> */}
      <Footer />
    </MakeDivPlaceCenter>
  );
};

export default App;
