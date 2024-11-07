import styled from "styled-components";

// 전체를 감싸는 div
const WholeDiv = styled.div`
  text-align: center;
`;

// 'JOIN' 문구
const StringJOIN = styled.div`
  font-size: 75px;
  font-weight: bold;
  display: inline-block;
  margin: 5rem 0rem 2.5rem 0rem;
`;

// '회원 정보~', 문구
// '아이디는 이메일~' 문구를 감싸는 div
const AboutJoin = styled.div`
  line-height: 35px;
  margin-bottom: 2rem;
`;

// '회원 정보~' 문구
const MemberInfo = styled.span`
  font-weight: bold;
  font-size: 22px;
`;

// '아이디는 이메일~' 문구
const IdUseEmailSentence = styled.span`
  color: #aaa;
  font-size: 17px;
  font-weight: bold;
`;

// 이메일 tbx 2개,
// 이메일 cbox,
// '@' 감싸는 div
const EmailWholeDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 400px;
  margin: 0 auto;
`;

// 이메일 cbox
const EmailSelBox = styled.select`
  height: 57px;
  width: 125px;
  cursor: pointer;
  font-size: 15px;
`;

// 이메일 앞자리 입력하는 tbx
const EmailTbx = styled.input`
  height: 55px;
  width: 120px;
  font-size: 18px;
  padding: 0px 10px 0px 10px;
  border: 2px solid #aaa;
`;

// 이메일 cbox
const EmailCbox = styled.option`
  font-size: 18px;
  text-align: left;
`;

// 골뱅이(@) 문구
const LetterAt = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

// 이메일 뒷자리 입력하는 tbx
const EmailAfterAtTbx = styled.input`
  width: 110px;
  font-size: 18px;
  text-align: center;
`;

// 이름 입력하는 tbx,
// 비밀번호 입력하는 tbx,
// 비밀번호 힌트 입력하는 tbx
const InfoTbx = styled.input`
  height: 55px;
  width: 380px;
  font-size: 18px;
  padding: 0px 10px 0px 10px;
  border: 2px solid #aaa;
  margin-top: 7.5px;
`;

// 가입 btn
const JoinBtn = styled.button`
  height: 55px;
  width: 402px;
  font-size: 18px;
  cursor: pointer;
  border: transparent;
  background-color: red;
  color: white;
  font-weight: bold;
  margin-top: 15px;
`;

// 비밀번호 힌트 tbx에서 엔터치면
// 가입 btn으로 포커스
const ApplyInJoinBTn = (e) => {
  if (e.key === "Enter") {
    // document.getElementById("idIsJoinBtn").focus();
  }
};

// 비밀번호 및 비밀번호 확인 문자열 일치 여부 확인
// 이름 tbx에 기호, 특수 문자, 숫자 입력 제한
const CheckFormAvailable = document.getElementById("idIsJoinBtn");
if (CheckFormAvailable.focus()) {
  alert("버튼에 포커스");
}

const Join = () => {
  return (
    <WholeDiv>
      <StringJOIN>JOIN</StringJOIN>
      <AboutJoin>
        <MemberInfo>회원 정보를 입력해 주세요</MemberInfo>
        <br />
        <IdUseEmailSentence>
          아이디는 이메일 주소를 사용합니다
        </IdUseEmailSentence>
      </AboutJoin>
      <div>
        <br />

        <EmailWholeDiv>
          <EmailTbx type="text"></EmailTbx>

          <EmailSelBox>
            <EmailCbox>@naver.com</EmailCbox>
            <EmailCbox>@daum.net</EmailCbox>
            <EmailCbox>@gmail.com</EmailCbox>
            <EmailCbox>@kakao.com</EmailCbox>
            <EmailCbox>@hanmail.net</EmailCbox>
            <option>직접 입력</option>
          </EmailSelBox>
          <LetterAt>@</LetterAt>
          <EmailAfterAtTbx type="text"></EmailAfterAtTbx>
        </EmailWholeDiv>

        <br />
        <InfoTbx
          type="password"
          placeholder="비밀번호를 입력해주세요"
          id="idIsPw"
        ></InfoTbx>
        <br />
        <InfoTbx
          type="password"
          placeholder="비밀번호를 다시 입력해주세요"
          id="idIsPwReName"
        ></InfoTbx>
        <br />
        <InfoTbx
          type="text"
          placeholder="이름을 입력해주세요"
          maxLength={4}
        ></InfoTbx>
        <br />
        <InfoTbx
          type="text"
          placeholder="비밀번호 힌트를 입력해주세요"
          onKeyDown={ApplyInJoinBTn}
        ></InfoTbx>
        <br />
        <JoinBtn id="idIsJoinBtn">가입</JoinBtn>
      </div>
    </WholeDiv>
  );
};

export default Join;
