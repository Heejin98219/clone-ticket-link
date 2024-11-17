import { useState } from "react";
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

  // 비밀번호 찾기 (사실상 변경) 함수
  // 비밀번호는 암호화 되어서 저장되고
  // 암호화로 인해 저장값이 달라서 중복되도 괜찮음
  const FindPwInTicketLink = async () => {
    const { data, error } = await supabase
      .from("Users") // 비밀번호 저장할 테이블
      .upsert(
        {
          id: 42, // 고유 식별자
          handle: "saoirse", // 중복 판단
          display_name: "Saoirse", // 단순 데이터로 중복 여부 판단 없이 업데이트 가능
        },
        { onConflict: "handle" } // 특정 컬럼의 중복 여부를 기준으로 업데이트하거나 새로 삽입하는 로직을 결정
      )
      .select();
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
          ></UserInfoTbx>
          <UserInfoTbx
            type="text"
            placeholder="비밀번호 힌트를 입력해주세요"
            value={hint}
          ></UserInfoTbx>

          <UserInfoTbx
            type="password"
            placeholder="비밀번호를 입력해주세요"
            id="idIsPw"
            value={pw}
          ></UserInfoTbx>

          <PwTbx
            type="password"
            placeholder="비밀번호를 입력해주세요"
            id="idIsPwReWrite"
            value={pwRe}
          ></PwTbx>
        </div>
        <ChangePwBtn id="idIsChangePwBtn">변경</ChangePwBtn>
      </WholeDiv>
    </div>
  );
};

export default FindPw;
