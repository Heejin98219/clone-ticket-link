import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// 전체를 감싸는 div
const WholeDiv = styled.div`
  position: relative;
`;

// 로고 이미지
const TitleLogo = styled.div`
  display: inline-block;
  cursor: pointer;
  margin: 2.5rem 5rem 4rem 3rem;
`;

// 검색 tbx, 검색 btn 감싸는 div
const SearchDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid black;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-evenly;
  width: 380px;
  height: 45px;
  border-radius: 15px;
  z-index: 900;
`;

// 검색 tbx
const SearchTbx = styled.input`
  width: 300px;
  height: 35px;
  border-radius: 10px;
  font-size: 18px;
  outline: none;
  border: none;
`;

const LogoAndSearchInput = () => {
  return (
    <>
      <WholeDiv>
        <TitleLogo>
          <img src="/image/ticketLinkImg.png" />
        </TitleLogo>
        <SearchDiv>
          <SearchTbx
            type="text"
            placeholder="검색어를 입력해주세요"
            id="idIsSearchBox"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="2xl"
            style={{
              cursor: "pointer",
            }}
          />
        </SearchDiv>
      </WholeDiv>
    </>
  );
};

export default LogoAndSearchInput;
