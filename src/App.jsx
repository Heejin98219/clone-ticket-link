import Footer from "./components/CopyRightAndSns";
import OpenedTicketList from "./components/OpenedTicketList";
import AutoScrollUp from "./components/AutoScrollUp";
import LogoAndSearchInput from "./components/LogoAndSearchInput";
import styled from "styled-components";
import LocalMenuItem from "./components/LocalMenuItem";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Join from "./components/Join";
import FindId from "./components/FindId";
import FindPw from "./components/FindPw";
import FetchData from "./components/FetchData";

// 모든 컴포넌트 중앙 정렬
const MakeDivPlaceCenter = styled.div`
  margin: 0 auto;
  width: 1500px;
`;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <LocalMenuItem />
              <MakeDivPlaceCenter>
                <LogoAndSearchInput />
                <OpenedTicketList />
                <AutoScrollUp />
                {/* 지우기 */}
                <FetchData />
                <Footer />
              </MakeDivPlaceCenter>
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/findid" element={<FindId />} />
        <Route path="/findpw" element={<FindPw />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
