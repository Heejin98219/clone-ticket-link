import styled from "styled-components";

// '티켓오픈', '전체 보기' 텍스트
const TicketOpenListTopBar = styled.div`
  /* border: 1px solid green; */
  width: 1390px;
  margin: 0 auto;
`;

// '티켓 오픈' 텍스트
const TicketOpen = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 2rem;
`;

// '전체 보기' 텍스트
const ShowAll = styled.div`
  float: right;
  cursor: pointer;
  font-size: 15px;
  line-height: 25px;
  &:hover {
    text-decoration: underline;
  }
`;

// 이미지
const TicketImg = styled.img`
  width: 210px;
  height: 290px;
`;

// 이미지 감싸는 div
const ImgDiv = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1390px;
  margin: 0 auto;
  cursor: pointer;
`;

// 티켓명
const TicketName = styled.p`
  margin-top: 3px;
`;

const OpenTicketList = () => {
  return (
    <div>
      <TicketOpenListTopBar>
        <TicketOpen>
          티켓오픈<ShowAll>전체보기</ShowAll>
        </TicketOpen>
      </TicketOpenListTopBar>

      <ImgDiv>
        <div>
          <TicketImg src="/image/InfiniteFirstImg.jpg" />
          <br />
          <TicketName>INFINITE 15th Anniversary ...</TicketName>
        </div>
        <div>
          <TicketImg src="/image/InfiniteSecondImg.jpg" />
          <br />
          <TicketName>INFINITE 무한대집회 IV</TicketName>
        </div>
        <div>
          <TicketImg src="/image/InfiniteThirdImg.png" />
          <br />
          <TicketName>INFINITE COMBACK AGAIN</TicketName>
        </div>
        <div>
          <TicketImg src="/image/InfiniteFourthImg.jpg" />
          <br />
          <TicketName>INFINITE One Great Step R...</TicketName>
        </div>
        <div>
          <TicketImg src="/image/InfiniteFifthImg.jpg" />
          <br />
          <TicketName>&#91;단독판매&#93; JANGDONGWO...</TicketName>
        </div>
      </ImgDiv>
    </div>
  );
};

export default OpenTicketList;
