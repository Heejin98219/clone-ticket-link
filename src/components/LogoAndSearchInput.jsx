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

// // 검색 tbx, 검색 btn 감싸는 div
// const SearchInputDiv = styled.div`
//   position: absolute;
//   display: inline-block;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;

// // 검색 tbx
// const SearchTbx = styled.input`
//   height: 49px;
//   border-radius: 10px;
//   width: 350px;
//   padding: 0px 10px 0px 10px;
//   font-size: 20px;
//   margin-bottom: 6px;
//   border: 3px solid green;
// `;

// // 검색 btn
// const SearchBox = styled.button`
//   height: 51px;
//   border-radius: 10px;
//   margin-left: 7px;
//   font-size: 18px;
//   cursor: pointer;
//   width: 60px;
//   border: 1px solid black;
// `;

const LogoAndSearchInput = () => {
  return (
    <>
      <WholeDiv>
        <TitleLogo>
          <img src="/image/ticketLinkImg.png" />
        </TitleLogo>
        {/* <SearchInputDiv>
          <SearchTbx
            type="text"
            placeholder="검색어를 입력해주세요"
          ></SearchTbx>
          <SearchBox>검색</SearchBox>
          <div
            style={{
              border: "2px solid red",
              display: "inline-block",
            }}
          >
            
            
          </div>
        </SearchInputDiv> */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "3px solid black",
            display: "flex",
            alignItems: "center",
            margin: "0 auto",
            justifyContent: "space-evenly",
            width: "380px",
            height: "45px",
            borderRadius: "15px",
          }}
        >
          <div>
            <input
              type="text"
              style={{
                width: "325px",
                height: "35px",
                borderRadius: "10px",
                padding: "0px 5px 0px 5px",
                border: "none",
              }}
            ></input>
          </div>
          <div
            style={{
              display: "inline-block",
              cursor: "pointer",
              marginRight: "5px",
            }}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" />
          </div>
        </div>
      </WholeDiv>
    </>
  );
};

export default LogoAndSearchInput;
