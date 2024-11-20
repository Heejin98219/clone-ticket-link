import { Link } from "react-router-dom";
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
const ShowAll = styled(Link)`
  float: right;
  cursor: pointer;
  font-size: 15px;
  line-height: 25px;
  color: black;
  text-decoration: none;
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

// 스타일 적용된 Link 태그
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const OpenedTicketList = () => {
  return (
    <div>
      <TicketOpenListTopBar>
        <TicketOpen>티켓오픈</TicketOpen>
        <ShowAll
          to="#"
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://www.ticketlink.co.kr/help/notice#TICKET_OPEN";
          }}
        >
          전체보기
        </ShowAll>
      </TicketOpenListTopBar>

      <ImgDiv>
        <StyledLink to="https://www.ticketlink.co.kr/product/52808">
          <TicketImg
            src="http://image.toast.com/aaaaab/ticketlink/TKL_10/main1023(3).jpg"
            to="https://www.ticketlink.co.kr/product/52808"
          />
          <br />
          <TicketName>
            INFINITE 15th Anniversary ...
            <TicketTime>06.09&#40;화&#41; 20:00</TicketTime>
          </TicketName>
        </StyledLink>
        <StyledLink to="https://www.ticketlink.co.kr/product/51557">
          <TicketImg src="http://image.toast.com/aaaaab/ticketlink/TKL_7/nam_main_0820.jpg" />
          <br />
          <TicketName>
            2024 NAM WOO HYUN CO...
            <TicketTime>08.17&#40;금&#41; 20:00</TicketTime>
          </TicketName>
        </StyledLink>
        <StyledLink to="https://www.ticketlink.co.kr/product/50692">
          <TicketImg src="http://image.toast.com/aaaaab/ticketlink/TKL_6/main0716(3).jpg" />
          <br />
          <TicketName>
            2024 KIM SUNG KYU CO ...
            <TicketTime>02.12&#40;수&#41; 20:00</TicketTime>
          </TicketName>
        </StyledLink>
        <StyledLink to="https://www.ticketlink.co.kr/product/47723">
          <TicketImg src="http://image.toast.com/aaaaab/ticketlink/TKL_9/MAIN_POSTER_0102.jpg" />
          <br />
          <TicketName>
            2024 KIM SUNG KYU FAN ...
            <TicketTime>05.15&#40;월&#41; 20:00</TicketTime>
          </TicketName>
        </StyledLink>
        <StyledLink to="https://www.ticketlink.co.kr/product/47723">
          <TicketImg src="http://image.toast.com/aaaaab/ticketlink/TKL_7/leesungyeol_main.jpg" />
          <br />
          <TicketName>
            2022 이성열 팬미팅
            <TicketTime>12.06&#40;목&#41; 20:00</TicketTime>
          </TicketName>
        </StyledLink>
      </ImgDiv>
    </div>
  );
};

export default OpenedTicketList;
