import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// 상단 바
const TopBar = styled.div`
  width: 100%;
  background-color: #efefef;
  height: 27px;
`;

// 상단 메뉴 div
const TopMenuDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
`;

// KOR btn의 ul
const KORBtnUl = styled.ul`
  display: inline-block;
  margin-top: 7px;
`;

// KOR btn
const KORBtn = styled.li`
  font-size: 11px;
  cursor: pointer;
`;

// KOR btn의 서브메뉴 ul
const KORBtnSubUl = styled.ul`
  position: relative;
  border: 2px solid black;
  top: 10px;
  text-align: center;
  border-radius: 5px;
  line-height: 20px;
  color: #aaa;
  font-weight: bold;
  background: white;
  z-index: 1000;
  ${({ isVisible }) => (isVisible ? "display: block;" : "display: none;")}

  & :hover {
    background-color: #aaa;
    color: black;
  }
`;

// KOR btn의 서브메뉴 한 개
export const KORBtnSubLi = styled.li`
  padding: 3px 11px 5px 10px;
  &:first-child:hover {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
  &:last-child:hover {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`;

// 우측 메뉴 전체 div
const RightMenus = styled.ul`
  display: flex;
  width: 37%;
  justify-content: space-between;
  cursor: pointer;
  font-size: 11px;
  margin-top: 7px;
`;

// 우측 메뉴 btn 한 개
const RightMenuBtn = styled.li`
  display: inline-block;
`;

// PAYCO 버튼
const RightPAYCOBTn = styled.li`
  color: red;
  font-weight: bold;
`;
// Link 태그에만 적용
export const ApplyInLinkTag = styled(Link)`
  color: black;
  text-decoration: none;
`;

// PAYCO Link 태그에만 적용
export const ApplyPAYCOInLinkTag = styled(Link)`
  color: red;
  text-decoration: none;
`;

const LocalMenuItem = ({ LoginedUser }) => {
  const [localMenu, setLocalMenu] = useState(false);
  // const [LoginedUser, setLoginedUSer] = useState("");
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const ShowLocalMenu = () => {
    setLocalMenu(!localMenu);
  };

  // // 메뉴의 가시성을 토글하는 함수
  // const toggleMenu = () => {
  //   setIsMenuVisible((prevState) => !prevState);
  // };

  return (
    <TopBar>
      <TopMenuDiv>
        <KORBtnUl>
          <KORBtn onClick={() => ShowLocalMenu()}>
            &nbsp;KOR&nbsp;▼
            {localMenu && (
              <KORBtnSubUl isVisible={isMenuVisible}>
                <KORBtnSubLi>
                  <ApplyInLinkTag to="https://www.ticketlink.co.kr/global/en">
                    ENG
                  </ApplyInLinkTag>
                </KORBtnSubLi>
                <KORBtnSubLi>
                  <ApplyInLinkTag to="https://www.ticketlink.co.kr/global/ja">
                    JPN
                  </ApplyInLinkTag>
                </KORBtnSubLi>
                <KORBtnSubLi>
                  <ApplyInLinkTag to="https://www.ticketlink.co.kr/global/zh">
                    CHN
                  </ApplyInLinkTag>
                </KORBtnSubLi>
              </KORBtnSubUl>
            )}
          </KORBtn>
        </KORBtnUl>

        <div>
          {/* 사용자 이름이 있으면 표시 */}
          {LoginedUser && <p>환영합니다, {LoginedUser}님!</p>}
        </div>

        <RightMenus>
          <RightMenuBtn
            onClick={() =>
              window.open(
                "/login",
                "popupWindow",
                "width=500,height=550,resizable=yes,scrollbars=yes"
              )
            }
          >
            로그인
          </RightMenuBtn>
          <RightMenuBtn>예매확인/취소</RightMenuBtn>
          <RightMenuBtn
            onClick={() =>
              window.open(
                "/join",
                "popupWindow",
                "width=500,height=550,resizable=yes,scrollbars=yes"
              )
            }
          >
            회원가입
          </RightMenuBtn>
          <RightMenuBtn>
            <ApplyInLinkTag to="https://www.ticketlink.co.kr/help/main">
              고객센터
            </ApplyInLinkTag>
          </RightMenuBtn>
          <RightPAYCOBTn>
            <ApplyPAYCOInLinkTag to="https://www.payco.com/point/intro.nhn">
              PAYCO
            </ApplyPAYCOInLinkTag>
          </RightPAYCOBTn>
          <RightMenuBtn>관계사&nbsp;▼</RightMenuBtn>
        </RightMenus>
      </TopMenuDiv>
    </TopBar>
  );
};

export default LocalMenuItem;
