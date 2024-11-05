import styled from "styled-components";

// '티켓오픈', '전체 보기' 텍스트
const TicketOpenListTopBar = styled.div`
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
  width: 213px;
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
  margin-top: 5px;
  font-size: 16px;
`;

// 티켓 (예매)시간
const TicketTime = styled.p`
  margin-top: 5px;
  color: red;
  font-weight: bold;
  font-size: 14px;
`;

const OpenedTicketList = () => {
  return (
    <div>
      <TicketOpenListTopBar>
        <TicketOpen>
          티켓오픈<ShowAll>전체보기</ShowAll>
        </TicketOpen>
      </TicketOpenListTopBar>

      <ImgDiv>
        <div>
          <TicketImg src="data:image/jpeg;base64,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" />
          <br />
          <TicketName>
            INFINITE 15th Anniversary ...
            <TicketTime>06.09&#40;화&#41; 20:00</TicketTime>
          </TicketName>
        </div>
        <div>
          <TicketImg src="https://thumb.mtstarnews.com/21/2024/06/2024060108140295725_1.jpg" />
          <br />
          <TicketName>
            INFINITE 무한대집회 IV
            <TicketTime>08.17&#40;금&#41; 20:00</TicketTime>
          </TicketName>
        </div>
        <div>
          <TicketImg src="https://www.atstar1.com/news/photo/202307/6002749_53509_3437.jpg" />
          <br />
          <TicketName>
            INFINITE COMBACK AGAIN
            <TicketTime>02.12&#40;수&#41; 20:00</TicketTime>
          </TicketName>
        </div>
        <div>
          <TicketImg src="https://i.namu.wiki/i/4t5ApnIf4ze8zy-fMGY9Nv9MUeJYHcsnMDvSDTJ2OFp63sxvqasMRSdOQwPyQAGylXJaNaRsdwZopl0z8EuHIw.webp" />
          <br />
          <TicketName>
            INFINITE One Great Step R...
            <TicketTime>05.15&#40;월&#41; 20:00</TicketTime>
          </TicketName>
        </div>
        <div>
          <TicketImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkVJCEDIA4TaGu6pJ-CyA32l1TuX9oX6LNVw&s" />
          <br />
          <TicketName>
            &#91;단독판매&#93; JANGDONGWO...
            <TicketTime>12.06&#40;목&#41; 20:00</TicketTime>
          </TicketName>
        </div>
      </ImgDiv>
    </div>
  );
};

export default OpenedTicketList;
