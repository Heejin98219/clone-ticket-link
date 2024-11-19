import { useState, useEffect } from "react";
import styled from "styled-components";
import supabase from "../../supabaseClient";

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
  const [email, setEmail] = useState("");
  const [hint, setHint] = useState("");
  const [pw, setPw] = useState("");
  const [pwRe, setPwRe] = useState("");

  // 공란 전환 함수
  const MakeInputClear = () => {
    setEmail("");
    setHint("");
    setPw("");
    setPwRe("");
  };

  // 비밀번호 변경 로직
  const FindPwInTicketLink = async () => {
    // 비밀번호 확인
    if (pw !== pwRe) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      // 비밀번호 업데이트
      const { data, error } = await supabase.auth.updateUser({
        password: pw,
      });

      if (error) {
        console.error("비밀번호 변경 실패:", error.message);
        alert("비밀번호 변경에 실패했습니다. 다시 시도해주세요.");
        return;
      }

      alert("비밀번호가 성공적으로 변경되었습니다.");
      MakeInputClear();
    } catch (err) {
      console.error("비밀번호 변경 중 오류:", err);
      alert("알 수 없는 오류가 발생했습니다.");
    }
  };

  // 비밀번호 찾기 버튼 enter
  const EnterFindPwInTicketLink = (e) => {
    if (e.key === "Enter") {
      FindPwInTicketLink();
    }
  };

  return (
    <div>
      <WholeDiv>
        <StringFindPW>비밀번호 찾기</StringFindPW>

        <div>
          <UserInfoTbx
            type="text"
            placeholder="아이디(이메일 주소)를 입력해주세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></UserInfoTbx>
          <UserInfoTbx
            type="text"
            placeholder="비밀번호 힌트를 입력해주세요"
            value={hint}
            onChange={(e) => setHint(e.target.value)}
          ></UserInfoTbx>

          <UserInfoTbx
            type="password"
            placeholder="비밀번호를 입력해주세요"
            id="idIsPw"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          ></UserInfoTbx>

          <PwTbx
            type="password"
            placeholder="비밀번호를 입력해주세요"
            id="idIsPwReWrite"
            value={pwRe}
            onChange={(e) => setPwRe(e.target.value)}
            onKeyDown={(e) => EnterFindPwInTicketLink(e)}
          ></PwTbx>
        </div>
        <ChangePwBtn id="idIsChangePwBtn">변경</ChangePwBtn>
      </WholeDiv>
    </div>
  );
};

export default FindPw;
