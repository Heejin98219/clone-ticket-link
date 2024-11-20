import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import supabase from "../../supabaseClient";

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

const LocalMenuItem = () => {
  const [localMenu, setLocalMenu] = useState(false);
  const [user, setUser] = useState(null); // 사용자 정보를 저장할 상태

  // 사용자 정보 조회 함수
  const fetchLoggedInUser = async () => {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) {
      console.error("Error fetching user:", error.message);
      return;
    }
    setUser(user); // 사용자 정보를 상태에 저장
  };

  // 로그아웃 함수
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error logging out:", error.message);
      return;
    }
    setUser(null); // 로그아웃 후 상태 초기화
  };

  useEffect(() => {
    fetchLoggedInUser(); // 컴포넌트 마운트 시 사용자 정보 조회
  }, []);

  return (
    <TopBar>
      <TopMenuDiv>
        <div>
          {/* 사용자 정보 표시 */}
          {user ? (
            <p>환영합니다, {user.email}님!</p>
          ) : (
            <p>로그인이 필요합니다.</p>
          )}
        </div>

        <RightMenus>
          {user ? (
            // 로그아웃 버튼
            <RightMenuBtn onClick={handleLogout}>로그아웃</RightMenuBtn>
          ) : (
            // 로그인 버튼
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
          )}
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
            <Link to="https://www.ticketlink.co.kr/help/main">고객센터</Link>
          </RightMenuBtn>
        </RightMenus>
      </TopMenuDiv>
    </TopBar>
  );
};

export default LocalMenuItem;
