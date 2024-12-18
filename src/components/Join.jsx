import styled from "styled-components";
import { useState } from "react";
import supabase from "../../supabaseClient";

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

// '회원 정보~' 문구
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
// at(@) 감싸는 div
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

// 앳(@) 문구
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

const Join = () => {
  const [frontEmail, setFrontEmail] = useState("");
  const [name, setName] = useState("");
  const [hint, setHint] = useState("");
  const [pw, setPw] = useState("");
  const [pwRe, setPwRe] = useState("");
  const [backEmail, setBackEmail] = useState("@naver.com");

  // 이메일 뒷자리 설정 함수
  const ChangeBackEmail = (e) => {
    setBackEmail(e.target.value);
  };

  // 이름 tbx에 숫자, 기호 입력 제한 함수
  const PreventNumbersAndSymbols = (e) => {
    const newName = e.target.value;

    if (/\d/.test(newName)) {
      alert("이름을 입력해주세요");
      setName("");
    } else if (/[^a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ]/.test(newName)) {
      alert("이름을 입력해주세요");
      setName("");
    } else {
      setName(newName);
    }
  };

  // 공란 전환 함수
  const MakeInputClear = () => {
    setFrontEmail("");
    setName("");
    setHint("");
    setPw("");
    setPwRe("");
  };

  // 회원가입 함수
  const JoinTicketLink = async () => {
    if (pw !== pwRe) {
      alert("비밀번호를 다시 확인해 주세요");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: frontEmail + backEmail,
      password: pw,
      options: {
        data: {
          passwordHint: hint,
          name: name,
        },
      },
    });

    if (error) {
      console.error("Sign up error:", error.message);
      alert("회원가입에 실패하였습니다");
      MakeInputClear();
    } else {
      console.log("Sign up success:", data);
      alert("회원가입에 성공하였습니다");
      const { error } = await supabase.from("Users").insert({
        email: data.user.email,
        name: name,
        passwordHint: hint,
      });
      MakeInputClear();
    }
  };

  // 회원가입 버튼 enter
  const EnterJoinTicketLink = (e) => {
    if (e.key === "Enter") {
      JoinTicketLink();
    }
  };

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
          <EmailTbx
            type="text"
            value={frontEmail}
            onChange={(e) => setFrontEmail(e.target.value)}
          />
          <EmailSelBox onChange={ChangeBackEmail}>
            <EmailCbox value="@naver.com">@naver.com</EmailCbox>
            <EmailCbox value="@daum.net">@daum.net</EmailCbox>
            <EmailCbox value="@gmail.com">@gmail.com</EmailCbox>
            <EmailCbox value="@kakao.com">@kakao.com</EmailCbox>
            <EmailCbox value="@hanmail.net">@hanmail.net</EmailCbox>
            <option value="">직접 입력</option>
          </EmailSelBox>
          <LetterAt>@</LetterAt>
          <EmailAfterAtTbx type="text" />
        </EmailWholeDiv>
        <br />
        <InfoTbx
          type="text"
          placeholder="이름을 입력해주세요"
          id="idIsNameTbx"
          value={name}
          onChange={PreventNumbersAndSymbols}
        />
        <br />
        <InfoTbx
          type="text"
          placeholder="비밀번호 힌트를 입력해주세요"
          value={hint}
          id="idIsHintTbx"
          onChange={(e) => setHint(e.target.value)}
        />
        <InfoTbx
          type="password"
          placeholder="비밀번호를 입력해주세요"
          id="idIsReTbx"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        <br />
        <InfoTbx
          type="password"
          placeholder="비밀번호를 다시 입력해주세요"
          id="idIsPwReTbx"
          value={pwRe}
          onChange={(e) => setPwRe(e.target.value)}
          onKeyDown={EnterJoinTicketLink}
        />

        <JoinBtn id="idIsJoinBtn" onClick={JoinTicketLink}>
          가입
        </JoinBtn>
      </div>
    </WholeDiv>
  );
};

export default Join;
