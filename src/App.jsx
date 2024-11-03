import Footer from "./components/CopyRightAndSns";
import OpenedTicketList from "./components/OpenedTicketList";
import AutoScrollUp from "./components/AutoScrollUp";
import TicketLinkLogo from "./components/TicketLinkLogo";
import styled from "styled-components";
import TopBar from "./components/TopBar";

// 모든 컴포넌트 중앙 정렬
const MakeDivPlaceCenter = styled.div`
  margin: 0 auto;
  width: 1500px;
`;

const App = () => {
  return (
    <MakeDivPlaceCenter>
      <TopBar />
      <TicketLinkLogo />
      <OpenedTicketList />
      <AutoScrollUp />
      <Footer />
    </MakeDivPlaceCenter>
  );
};

export default App;
