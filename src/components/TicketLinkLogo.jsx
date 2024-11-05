import styled from "styled-components";

// 로고 이미지
const TitleLogo = styled.div`
  display: inline-block;
  cursor: pointer;
  margin: 2.5rem 5rem 4rem 3rem;
`;

const TicketLinkLogo = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
        }}
      >
        <TitleLogo>
          <img src="/image/TicketLinkImg.png" />
        </TitleLogo>
        {/* 검색 tbx, 검색 btn*/}
        <div
          style={{
            position: "absolute",
            display: "inline-block",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <input
            type="text"
            placeholder="검색어를 입력해주세요"
            style={{
              height: "49px",
              borderRadius: "10px",
              width: "300px",
              padding: "0px 10px 0px 10px",
              fontSize: "20px",
              marginBottom: "6px",
            }}
          ></input>
          <button
            style={{
              height: "51px",
              borderRadius: "10px",
              marginLeft: "5px",
              fontSize: "18px",
              cursor: "pointer",
              width: "60px",
              border: "1px solid black",
            }}
          >
            검색
          </button>
        </div>
      </div>
    </>
  );
};

export default TicketLinkLogo;
