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

// 비밀번호 힌트 tbx에서 Enter 키가 눌리면 찾기 버튼으로 포커스 이동

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

  // 아이디 조회 함수 (upsert)
  const FindIdInTicketLink = async () => {
    const response = await supabase.auth.admin.listUsers();
    console.log(response);
    // .from() // 테이블명
    // .select("Email") // '*'는 모든 컬럼 '컬럼명'은 그 컬럼/
    // .eq("column", name); // eq("컬럼명", 찾고자 하는 값)
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
        />
        <PwHintTbx
          type="text"
          placeholder="비밀번호 힌트를 입력해주세요"
          value={hint}
        />
      </div>
      <FindIdBtn id="idIsFindIdBTn" onClick={FindIdInTicketLink}>
        찾기
      </FindIdBtn>
    </WholeDiv>
  );
};

export default FindId;
