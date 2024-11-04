import Footer from "./components/CopyRightAndSns";
import OpenedTicketList from "./components/OpenedTicketList";
import AutoScrollUp from "./components/AutoScrollUp";
import TicketLinkLogo from "./components/TicketLinkLogo";
import styled from "styled-components";
<<<<<<< HEAD
import TopMenuBar from "./components/TopMenuBar";
=======
import TopBar from "./components/TopBar";
>>>>>>> 2da701e5919942df3c7877009c90e6d03096d18b

// 모든 컴포넌트 중앙 정렬
const MakeDivPlaceCenter = styled.div`
  margin: 0 auto;
  width: 1500px;
`;

const App = () => {
  return (
    <MakeDivPlaceCenter>
<<<<<<< HEAD
      <TopMenuBar />
=======
      <TopBar />
>>>>>>> 2da701e5919942df3c7877009c90e6d03096d18b
      <TicketLinkLogo />
      <OpenedTicketList />
      <AutoScrollUp />
      <Footer />
    </MakeDivPlaceCenter>
  );
};

export default App;
