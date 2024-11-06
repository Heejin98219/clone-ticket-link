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

// 이메일 입력하는 tbx
const EmailTbx = styled.input`
  height: 55px;
  width: 380px;
  font-size: 18px;
  padding: 0px 10px 0px 10px;
  border: 2px solid #aaa;
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
        <EmailTbx type="email" placeholder="이메일을 입력해주세요"></EmailTbx>
        <br />
        <InfoTbx type="text" placeholder="비밀번호를 입력해주세요"></InfoTbx>
        <br />
        <InfoTbx type="text" placeholder="이름을 입력해주세요"></InfoTbx>
        <br />
        <InfoTbx
          type="text"
          placeholder="비밀번호 힌트를 입력해주세요"
        ></InfoTbx>
        <br />
        <JoinBtn>가입</JoinBtn>
      </div>
    </WholeDiv>
  );
};

export default Join;
