import styled from "styled-components";

// 전체를 감싸는 div
const WholeDiv = styled.div`
  text-align: center;
`;

// '아이디 찾기' 문구
const StringFindId = styled.div`
  font-size: 75px;
  font-weight: bold;
  display: inline-block;
  margin: 5rem 0rem 2.5rem 0rem;
`;

// 이름 입력하는 tbx
const UserNameTbx = styled.input`
  height: 55px;
  width: 380px;
  font-size: 18px;
  padding: 0px 10px;
  border: 2px solid #aaa;
  margin-bottom: 7.5px;
`;

// 비밀번호 힌트 입력하는 tbx
const PwHintTbx = styled.input`
  height: 55px;
  width: 380px;
  font-size: 18px;
  padding: 0px 10px;
  border: 2px solid #aaa;
  margin-bottom: 15px;
`;

// 찾기 btn
const FindIdBtn = styled.button`
  height: 55px;
  width: 402px;
  font-size: 18px;
  cursor: pointer;
  border: transparent;
  background-color: red;
  color: white;
  font-weight: bold;
`;

// 이름 tbx에 기호, 특수문자, 숫자 입력 제한
const ApplyInUserNameTbx = (e) => {
  const RegexSymbols = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
  const Number = /[0-9]/g;
  const RegexSpace = /\s/g;

  if (e.key !== "Enter") {
    if (RegexSymbols.test(e.key)) {
      alert("기호 및 특수문자는 입력할 수 없습니다.");
      e.preventDefault();
      // 공란 전환

      document.getElementById("idIsUserName").value = "";
    } else if (Number.test(e.key)) {
      alert("숫자는 입력할 수 없습니다.");
      e.preventDefault();

      // 공란 전환
      document.getElementById("idIsUserName").value = "";
    } else if (RegexSpace.test(e.key)) {
      alert("빈 칸이 입력되었습니다.");
      e.preventDefault();

      // 공란 전환
      document.getElementById("idIsUserName").value = "";
    }
  }
};

// 비밀번호 힌트 tbx에서 Enter 키가 눌리면 찾기 버튼으로 포커스 이동
const ApplyInPwHintTbx = (e) => {
  if (e.key === "Enter") {
    document.getElementById("idIsFindIdBTn").focus();
  }
};

const FindId = () => {
  return (
    <WholeDiv>
      <StringFindId>아이디 찾기</StringFindId>
      <div>
        <UserNameTbx
          onKeyDown={ApplyInUserNameTbx}
          type="text"
          placeholder="이름을 입력해주세요"
          maxLength={4}
          id="idIsUserName"
        />
        <PwHintTbx
          onKeyDown={ApplyInPwHintTbx}
          type="text"
          placeholder="비밀번호 힌트를 입력해주세요"
        />
      </div>
      <FindIdBtn id="idIsFindIdBTn">찾기</FindIdBtn>
    </WholeDiv>
  );
};

export default FindId;
