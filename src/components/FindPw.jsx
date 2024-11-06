import styled from "styled-components";

// 전체를 감싸는 div
const WholeDiv = styled.div`
  text-align: center;
`;

// '비밀번호 찾기' 문구
const StringFindPW = styled.div`
  font-size: 75px;
  font-weight: bold;
  display: inline-block;
  margin: 5rem 0rem 2.5rem 0rem;
`;

// 아이디(이메일 주소) 입력하는 tbx
const UserInfoTbx = styled.input`
  height: 55px;
  width: 380px;
  font-size: 18px;
  padding: 0px 10px 0px 10px;
  border: 2px solid #aaa;
  margin-bottom: 7.5px;
`;

// 비밀번호 힌트 입력하는 tbx
const PwTbx = styled.input`
  height: 55px;
  width: 380px;
  font-size: 18px;
  padding: 0px 10px 0px 10px;
  border: 2px solid #aaa;
  margin-bottom: 15px;
`;

// 변경 btn
const ChangePwBtn = styled.button`
  height: 55px;
  width: 402px;
  font-size: 18px;
  cursor: pointer;
  border: transparent;
  background-color: red;
  color: white;
  font-weight: bold;
`;

const FindPw = () => {
  return (
    <div>
      <WholeDiv>
        <StringFindPW>비밀번호 찾기</StringFindPW>

        <div>
          {" "}
          <UserInfoTbx
            type="text"
            placeholder="아이디(이메일 주소)를 입력해주세요"
          ></UserInfoTbx>
          <UserInfoTbx
            type="text"
            placeholder="비밀번호 힌트를 입력해주세요"
          ></UserInfoTbx>
          <UserInfoTbx
            type="text"
            placeholder="비밀번호를 입력해주세요"
          ></UserInfoTbx>
          <PwTbx type="text" placeholder="비밀번호를 입력해주세요"></PwTbx>
        </div>
        <ChangePwBtn>변경</ChangePwBtn>
      </WholeDiv>
    </div>
  );
};

export default FindPw;
