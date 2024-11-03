import styled from "styled-components";
const TopMenuBar = () => {
  // 상단 회색 바 div
  const TopBarDiv = styled.div`
    background: #efefef;
    height: 40px;
    width: 1390px;
  `;
  // KOR btn
  const KORBtn = styled.button`
    position: relative;
    font-size: 11.5px;
    line-height: 18px;
    cursor: pointer;
    left: 50px;
    margin-top: 9px;
    border-color: transparent;
    font-weight: bold;
  `;
  // '로그인' ~ '관계사' btn
  const TopRightBtns = styled.button`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    border: transparent;
    background-color: transparent;
    margin-top: 9px;
    font-size: 11px;
    font-weight: bold;
  `;

  // PAYCO btn
  const PAYCObtn = styled.button`
    color: red;
    font-weight: bold;
    cursor: pointer;
    border: transparent;
    background-color: transparent;
    margin-top: 9px;
    font-size: 11px;
  `;
  return (
    <TopBarDiv>
      <div>
        <ul>
          <li>
            <KORBtn>KOR</KORBtn>
          </li>
          <li
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "space-between",
              width: "360px",
              float: "right",
              right: "155px",
              top: "-32px",
            }}
          >
            <TopRightBtns>로그인</TopRightBtns>
            <TopRightBtns>예매확인/취소</TopRightBtns>
            <TopRightBtns>회원가입</TopRightBtns>
            <TopRightBtns>고객센터</TopRightBtns>
            <PAYCObtn>PAYCO</PAYCObtn>
            <TopRightBtns>관계사</TopRightBtns>
          </li>
        </ul>
      </div>
    </TopBarDiv>
  );
};
export default TopMenuBar;
