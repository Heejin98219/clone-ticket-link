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

// 비밀번호 tbx에서 Enter 키가 눌리면 변경 버튼으로 포커스 이동
const ApplyInPwBtn = (e) => {
  const pwTbx1 = document.getElementById("idIsPw").value;
  const pwTbx2 = document.getElementById("idIsPwReName").value;

  if (e.key === "Enter") {
    if (pwTbx1.includes(" ") || pwTbx2.includes(" ")) {
      alert("비밀번호에는 공백이 포함될 수 없습니다.");

      // 공란 전환
      document.getElementById("idIsPw").value = "";
      document.getElementById("idIsPwReName").value = "";
    } else if (pwTbx1 !== pwTbx2) {
      alert("비밀번호를 확인해 주세요");

      // 공란 전환
      document.getElementById("idIsPw").value = "";
      document.getElementById("idIsPwReName").value = "";
    } else {
      document.getElementById("idIsChangePwBtn").focus();
    }
  }
};

const FindPw = () => {
  return (
    <div>
      <WholeDiv>
        <StringFindPW>비밀번호 찾기</StringFindPW>

        <div>
          <UserInfoTbx
            type="text"
            placeholder="아이디(이메일 주소)를 입력해주세요"
          ></UserInfoTbx>
          <UserInfoTbx
            type="text"
            placeholder="비밀번호 힌트를 입력해주세요"
          ></UserInfoTbx>

          <UserInfoTbx
            type="password"
            placeholder="비밀번호를 입력해주세요"
            id="idIsPw"
          ></UserInfoTbx>

          <PwTbx
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onKeyDown={ApplyInPwBtn}
            id="idIsPwReName"
          ></PwTbx>
        </div>
        <ChangePwBtn id="idIsChangePwBtn">변경</ChangePwBtn>
      </WholeDiv>
    </div>
  );
};

export default FindPw;
