import Footer from "./components/CopyRightAndSns";
import OpenedTicketList from "./components/OpenedTicketList";
import AutoScrollUp from "./components/AutoScrollUp";
import TicketLinkLogo from "./components/TicketLinkLogo";
import styled from "styled-components";
import LocalMenuItem from "./components/LocalMenuItem";
import { BrowserRouter } from "react-router-dom";

// 모든 컴포넌트 중앙 정렬
const MakeDivPlaceCenter = styled.div`
  margin: 0 auto;
  width: 1500px;
`;

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <LocalMenuItem />
        <MakeDivPlaceCenter>
          <TicketLinkLogo />
          <OpenedTicketList />
          <AutoScrollUp />
          <Footer />
        </MakeDivPlaceCenter>
      </div>
    </BrowserRouter>
  );
};

export default App;
