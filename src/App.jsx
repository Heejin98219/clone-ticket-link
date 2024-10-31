// import Copyright from "./components/Footer";
import Footer from "./components/Footer";
import OpenTicketList from "./components/OpenTicketList";
// import AutoScrollUp from "./components/AutoScrollUp";
import LogoImage from "./LogoImage";
import styled from "styled-components";

// 모든 컴포넌트 중앙 정렬
const MakeDivPlaceCenter = styled.div`
  margin: 0 auto;
  width: 1500px;
  border: 1px solid red;
`;

const App = () => {
  return (
    <MakeDivPlaceCenter>
      {/* 로고 이미지*/}
      <LogoImage />
      {/* <AutoScrollUp /> */}
      <OpenTicketList />
      {/* <Copyright /> */}
      <Footer />
    </MakeDivPlaceCenter>
  );
};

export default App;
