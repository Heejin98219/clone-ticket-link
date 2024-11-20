import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";

// 스타일 정의
const TicketOpenListTopBar = styled.div`
  width: 1390px;
  margin: 0 auto;
`;

const TicketOpen = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin: 5rem 0rem 2rem 0rem;
`;

const ShowAll = styled(Link)`
  float: right;
  cursor: pointer;
  font-size: 15px;
  line-height: 25px;
  color: black;
  text-decoration: none;
  font-weight: bold;
`;

const TicketImg = styled.img`
  width: 213px;
  height: 290px;
  cursor: pointer; /* 이미지 영역만 클릭 가능 */
  background-size: cover;
`;

const ImgDiv = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1390px;
  margin: 0 auto;
`;

const TicketName = styled.p`
  margin: 10px 0px 2.5rem 0px;
  font-size: 16px;
  cursor: default;
`;

const TicketTime = styled.p`
  margin-top: 5px;
  color: red;
  font-weight: bold;
  font-size: 14px;
`;

const StyledLink = styled(Link)`
  display: block; /* 링크 전체가 아닌 이미지만 클릭 가능 */
  margin-top: 5em; /* 여백을 여기로 이동 */
  color: black;
  text-decoration: none;
`;

// OpenedTicketList 컴포넌트
const OpenedTicketList = () => {
  // 이미지와 URL을 매핑한 배열
  const [images] = useState([
    {
      src: "https://image.toast.com/aaaaab/ticketlink/TKL_6/PC_BigBanner_%EB%A6%B0(1).jpg",
      url: "https://www.ticketlink.co.kr/product/53018",
    },
    {
      src: "https://image.toast.com/aaaaab/ticketlink/TKL_7/PC_BigBanner_%ED%8F%AC%EB%A0%88%EC%8A%A4%ED%85%94%EB%9D%BC(1).jpg",
      url: "https://www.ticketlink.co.kr/product/53323",
    },
    {
      src: "https://image.toast.com/aaaaab/ticketlink/TKL_10/PC_BigBanner_%ED%91%B8%EB%A5%B8%EC%84%B8%EC%83%81%EC%9D%84%EB%B9%9A%EB%8B%A4%EA%B3%A0%EB%A0%A4%EC%83%81%ED%98%95%EC%B2%AD%EC%9E%90.jpg",
      url: "https://www.ticketlink.co.kr/product/53144",
    },
    {
      src: "https://image.toast.com/aaaaab/ticketlink/TKL_10/PC_BigBanner_%EA%BC%BC%EB%A9%94%EB%94%94%EC%95%84%EB%94%94%ED%8C%8C%EB%85%B8%ED%82%A4%EC%98%A4(3).jpg",
      url: "https://www.ticketlink.co.kr/product/52203",
    },
    {
      src: "https://image.toast.com/aaaaab/ticketlink/TKL_6/PC_BigBanner_%EC%9E%AC%EC%B0%AC.jpg",
      url: "https://www.ticketlink.co.kr/product/53221",
    },
    {
      src: "https://image.toast.com/aaaaab/ticketlink/TKL_10/PC_BigBanner_%EC%9C%A0%EC%9A%B0%EB%A6%AC.jpg",
      url: "https://www.ticketlink.co.kr/product/53163",
    },
    {
      src: "https://image.toast.com/aaaaab/ticketlink/TKL_4/PC_BigBanner_2024SMGSHOW%EC%9A%B0%EC%A3%BC%EC%B5%9C%EA%B0%95%EC%87%BC.jpg",
      url: "https://www.ticketlink.co.kr/product/53118",
    },
    {
      src: "https://image.toast.com/aaaaab/ticketlink/TKL_3/PC_BigBanner_%EA%B4%91%ED%99%94%EB%AC%B8%EC%97%B0%EA%B0%80_%EC%8A%A4%ED%8E%98%EC%85%9C.jpg",
      url: "https://www.ticketlink.co.kr/bridge/1217",
    },
    {
      src: "https://image.toast.com/aaaaab/ticketlink/TKL_7/PC_BigBanner_%EB%B9%84%EC%97%94%EB%82%981900.jpg",
      url: "https://www.ticketlink.co.kr/product/52660",
    },
    {
      src: "https://image.toast.com/aaaaab/ticketlink/TKL_9/PC_BigBanner_%EB%AE%A4%EC%A7%80%EC%BB%AC_%ED%81%B4%EB%A1%9C%EB%B2%84_.jpg",
      url: "https://www.ticketlink.co.kr/product/52381",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMouseOver = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

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
        {/* 이미지 슬라이더 추가 */}
        <div
          style={{
            textAlign: "center",
            margin: "5rem 0rem 7rem 0rem",
            height: "450px",
          }}
        >
          <ImageSlider images={images} />
        </div>
      </TicketOpenListTopBar>

      {/* 티켓 리스트 */}
      <ImgDiv>
        <StyledLink to="https://www.ticketlink.co.kr/product/52808">
          <TicketImg src="http://image.toast.com/aaaaab/ticketlink/TKL_10/main1023(3).jpg" />
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
            2025 이성열 팬미팅
            <TicketTime>12.06&#40;목&#41; 20:00</TicketTime>
          </TicketName>
        </StyledLink>
      </ImgDiv>
      <ImgDiv>
        <StyledLink to="https://www.ticketlink.co.kr/product/53018">
          <TicketImg src="https://image.toast.com/aaaaab/ticketlink/TKL_6/PC_BigBanner_%EB%A6%B0(1).jpg" />
          <br />
          <TicketName>
            린 전국투어 콘서트
            <TicketTime>05.05&#40;금&#41; 17:00</TicketTime>
          </TicketName>
        </StyledLink>
        <StyledLink to="https://www.ticketlink.co.kr/product/53323">
          <TicketImg src="https://image.toast.com/aaaaab/ticketlink/TKL_7/PC_BigBanner_%ED%8F%AC%EB%A0%88%EC%8A%A4%ED%85%94%EB%9D%BC(1).jpg" />
          <br />
          <TicketName>
            2024 포레스텔라 Encore 콘...
            <TicketTime>08.17&#40;금&#41; 20:00</TicketTime>
          </TicketName>
        </StyledLink>
        <StyledLink to="https://www.ticketlink.co.kr/bridge/1217">
          <TicketImg src="https://image.toast.com/aaaaab/ticketlink/TKL_3/PC_BigBanner_%EA%B4%91%ED%99%94%EB%AC%B8%EC%97%B0%EA%B0%80_%EC%8A%A4%ED%8E%98%EC%85%9C.jpg" />
          <br />
          <TicketName>
            국립중앙박물관 특별전
            <TicketTime>02.12&#40;수&#41; 20:00</TicketTime>
          </TicketName>
        </StyledLink>
        <StyledLink to="https://www.ticketlink.co.kr/product/53221">
          <TicketImg src="https://image.toast.com/aaaaab/ticketlink/TKL_6/PC_BigBanner_%EC%9E%AC%EC%B0%AC.jpg" />
          <br />
          <TicketName>
            <TicketTime>05.15&#40;월&#41; 20:00</TicketTime>
          </TicketName>
        </StyledLink>
        <StyledLink to="https://www.ticketlink.co.kr/product/53118">
          <TicketImg src="https://image.toast.com/aaaaab/ticketlink/TKL_4/PC_BigBanner_2024SMGSHOW%EC%9A%B0%EC%A3%BC%EC%B5%9C%EA%B0%95%EC%87%BC.jpg" />
          <br />
          <TicketName>
            <TicketTime>12.06&#40;목&#41; 20:00</TicketTime>
          </TicketName>
        </StyledLink>
      </ImgDiv>
      <ImgDiv>
        {/* 린 전국 콘서트 */}
        <StyledLink to="https://www.ticketlink.co.kr/product/52660">
          <TicketImg src="https://image.toast.com/aaaaab/ticketlink/TKL_7/PC_BigBanner_%EB%B9%84%EC%97%94%EB%82%981900.jpg" />
          <br />
          <TicketName>
            <TicketTime>06.09&#40;화&#41; 20:00</TicketTime>
          </TicketName>
        </StyledLink>
        <StyledLink to="https://www.ticketlink.co.kr/product/53144">
          <TicketImg src="https://image.toast.com/aaaaab/ticketlink/TKL_10/PC_BigBanner_%ED%91%B8%EB%A5%B8%EC%84%B8%EC%83%81%EC%9D%84%EB%B9%9A%EB%8B%A4%EA%B3%A0%EB%A0%A4%EC%83%81%ED%98%95%EC%B2%AD%EC%9E%90.jpg" />
          <br />
          <TicketName>
            <TicketTime>08.17&#40;금&#41; 20:00</TicketTime>
          </TicketName>
        </StyledLink>
        <StyledLink to="https://www.ticketlink.co.kr/product/52203">
          <TicketImg src="https://image.toast.com/aaaaab/ticketlink/TKL_10/PC_BigBanner_%EA%BC%BC%EB%A9%94%EB%94%94%EC%95%84%EB%94%94%ED%8C%8C%EB%85%B8%ED%82%A4%EC%98%A4(3).jpg" />
          <br />
          <TicketName>
            <TicketTime>02.12&#40;수&#41; 20:00</TicketTime>
          </TicketName>
        </StyledLink>
        <StyledLink to="https://www.ticketlink.co.kr/product/53163">
          <TicketImg src="https://image.toast.com/aaaaab/ticketlink/TKL_10/PC_BigBanner_%EC%9C%A0%EC%9A%B0%EB%A6%AC.jpg" />
          <br />
          <TicketName>
            <TicketTime>05.15&#40;월&#41; 20:00</TicketTime>
          </TicketName>
        </StyledLink>
        <StyledLink to="https://www.ticketlink.co.kr/product/52381">
          <TicketImg src="https://image.toast.com/aaaaab/ticketlink/TKL_9/PC_BigBanner_%EB%AE%A4%EC%A7%80%EC%BB%AC_%ED%81%B4%EB%A1%9C%EB%B2%84_.jpg" />
          <br />
          <TicketName>
            <TicketTime>12.06&#40;목&#41; 20:00</TicketTime>
          </TicketName>
        </StyledLink>
      </ImgDiv>
    </div>
  );
};

export default OpenedTicketList;
