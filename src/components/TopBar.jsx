import styled from "styled-components";

const TopBar = () => {
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
    left: 30px;
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
    border: 2px solid blue;
  `;

  // PAYCO btn
  const PAYCObtn = styled.button`
    color: red;
    font-weight: bold;
    cursor: pointer;
    border: transparent;
    background-color: transparent;
    margin-top: 9px;
  `;

  return (
    <TopBarDiv>
      <div>
        <ul>
          <li>
            <KORBtn>KOR</KORBtn>
          </li>
        </ul>
        <ul
          style={{
            relative: "relative",
            display: "flex",
            border: "2px solid red",
          }}
        >
          <li>
            <TopRightBtns>로그인</TopRightBtns>
          </li>
          <li>
            <TopRightBtns>예매확인/취소</TopRightBtns>
          </li>
          <li>
            <TopRightBtns>회원가입</TopRightBtns>
          </li>
          <li>
            <TopRightBtns>고객센터</TopRightBtns>
          </li>
          <li>
            <PAYCObtn>PAYCO</PAYCObtn>
          </li>
          <li>
            <TopRightBtns>관계사</TopRightBtns>
          </li>
        </ul>
      </div>
    </TopBarDiv>
  );
};

export default TopBar;
