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
  padding: 0px 10px 0px 10px;
  border: 2px solid #aaa;
  margin-bottom: 7.5px;
`;

// 비밀번호 힌트 입력하는 tbx
const PwHintTbx = styled.input`
  height: 55px;
  width: 380px;
  font-size: 18px;
  padding: 0px 10px 0px 10px;
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

const FindId = () => {
  return (
    <WholeDiv>
      <StringFindId>아이디 찾기</StringFindId>

      <div>
        <UserNameTbx
          type="text"
          placeholder="이름을 입력해주세요"
        ></UserNameTbx>
        <PwHintTbx
          type="text"
          placeholder="비밀번호 힌트를 입력해주세요"
        ></PwHintTbx>
      </div>
      <FindIdBtn>찾기</FindIdBtn>
    </WholeDiv>
  );
};

export default FindId;
