import { useState } from "react";
import styled from "styled-components";
import supabase from "../../supabaseClient";

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

// 아이디 찾기 컴포넌트
const FindId = () => {
  const [name, setName] = useState("");
  const [hint, setHint] = useState("");

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
    setName("");
    setHint("");
  };

  // 아이디 조회 함수
  const FindIdInTicketLink = async () => {
    const { data, error } = await supabase
      .from("Users") // 테이블명
      .select("email") // 조회할 컬럼
      .eq("name", name) // 조건 1
      .eq("passwordHint", hint); // 조건 2
    console.log("name은 → ", name); // 성공
    console.log("hint은 → ", hint); // 데이터 안 들어옴
    if (error) {
      alert("없는 정보입니다");
      MakeInputClear();
    } else {
      alert(`찾은 아이디: ${data[0].email}`);
      MakeInputClear();
    }
  };

  // 아이디 찾기 버튼 enter
  const EnterFindIdInTicketLink = (e) => {
    if (e.key === "Enter") {
      FindIdInTicketLink();
    }
  };

  return (
    <WholeDiv>
      <StringFindId>아이디 찾기</StringFindId>
      <div>
        <UserNameTbx
          type="text"
          placeholder="이름을 입력해주세요"
          id="idIsUserName"
          value={name}
          onChange={(e) => PreventNumbersAndSymbols(e)}
        />
        <PwHintTbx
          type="text"
          placeholder="비밀번호 힌트를 입력해주세요"
          id="idIsPwHintTbx"
          value={hint}
          onChange={(e) => setHint(e.target.value)}
          onKeyDown={(e) => EnterFindIdInTicketLink(e)}
        />
      </div>
      <FindIdBtn id="idIsFindIdBtn" onClick={FindIdInTicketLink}>
        찾기
      </FindIdBtn>
    </WholeDiv>
  );
};

export default FindId;
