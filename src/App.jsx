import styled from "styled-components";
import "./App.css";
import GoUpBtn from "./components/GoUpBtn";

function App() {
  const TitleLogo = styled.div`
    border: 2px solid red;
    cursor: pointer;
  `;

  return (
    <>
      <TitleLogo>
        {/* 티켓 링크 로고 img */}
        <img src="/image/TicketLinkImg.png" />
      </TitleLogo>
      {/* 올라가기 버튼 */}
      <GoUpBtn />
    </>
  );
}

export default App;
