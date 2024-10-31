import styled from "styled-components";

// 로고 이미지
const TitleLogo = styled.div`
  display: inline-block;
  cursor: pointer;
  margin: 2.5rem 5rem 4rem 3rem;
`;

const LogoImage = () => {
  return (
    <>
      <TitleLogo>
        <img src="/image/TicketLinkImg.png" />
      </TitleLogo>
      <div></div>
    </>
  );
};

export default LogoImage;
