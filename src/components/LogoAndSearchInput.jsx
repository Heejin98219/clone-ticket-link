import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";

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
  const [searchWord, setSearchWord] = useState("");

  const BASE_URL = "http://kopis.or.kr/openApi/restful/pblprfr";
  const API_KEY = process.env.REACT_API_KEY;

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/pblprfr`, {
        params: {
          service: API_KEY,
          stdate: "20230601", // 시작 날짜 (필요시 변경 가능)
          eddate: "20230630", // 종료 날짜 (필요시 변경 가능)
          cpage: 1, // 현재 페이지
          rows: 10, // 한 번에 가져올 데이터 개수
          prfstate: "02", // 공연 상태
          signgucode: "11", // 지역 코드
          signgucodesub: "1111", // 하위 지역 코드
          kidstate: "Y", // 어린이 공연 여부
          keyword: searchWord, // 검색어
        },
      });

      setResult(response.data); // 결과를 상태에 저장
    } catch (error) {
      console.error("데이터 요청 중 오류 발생:", error);
    }
  };

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
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
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
