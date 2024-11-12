import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// 전체를 감싸는 div
const WholeDiv = styled.div`
  text-align: center;
`;

// 'LOGIN' 문구
const StringLOGIN = styled.div`
  font-size: 75px;
  font-weight: bold;
  display: inline-block;
  margin: 5rem 0rem 2.5rem 0rem;
`;

// 아이디 입력하는 tbx
const IdTbx = styled.input`
  height: 55px;
  width: 380px;
  font-size: 18px;
  padding: 0px 10px 0px 10px;
  border: 2px solid #aaa;
`;

// 비밀번호 입력하는 tbx
const PwTbx = styled.input`
  height: 55px;
  width: 380px;
  font-size: 18px;
  padding: 0px 10px 0px 10px;
  border: 2px solid #aaa;
  margin-top: 7.5px;
`;

// 로그인 btn
const LoginBtn = styled.button`
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

// 아이디 찾기 (li),
// 비밀번호 찾기 (li),
// 회원가입 (li) 감싸는 ul
const OtherLoginServicesUl = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 350px;
  margin: 15px auto;
  cursor: pointer;
`;

// 아이디 찾기,
// 비밀번호 찾기,
// 회원가입
const OtherLoginServices = styled.li`
  display: inline-block;
`;

// 비밀번호 tbx에서 Enter키가 눌리면 로그인 버튼으로 포커스 이동
const ApplyInPwBtn = (e) => {
  if (e.key === "Enter") {
    document.getElementById("idIsLoginBtn").focus();

    // 공백 입력 제한
    const idTbx = document.getElementById("idIsIdTbx").value;
    const pwTbx = document.getElementById("idIsPwTbx").value;

    if (idTbx.includes(" ") || pwTbx.includes(" ")) {
      alert("아이디 혹은 비밀번호를 다시 확인해 주세요");
      document.getElementById("idIsIdTbx").value = "";
      document.getElementById("idIsPwTbx").value = "";
    }
  }
};

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  // 아이디 변경
  const idClick = (e) => {
    setId(e.target.value);
    console.log(e.target.value);
  };

  // 비밀번호 변경
  const pwClick = (e) => {
    setPw(e.target.value);
    console.log(e.target.value);
  };

  const navigate = useNavigate();
  return (
    <WholeDiv>
      <StringLOGIN>LOGIN</StringLOGIN>
      <br />
      <IdTbx
        type="text"
        placeholder="아이디를 입력해주세요"
        id="idIsIdTbx"
        onChange={(e) => idClick(e)}
      ></IdTbx>
      <br />
      <PwTbx
        type="password"
        placeholder="비밀번호를 입력해주세요"
        id="idIsPwTbx"
        onKeyDown={ApplyInPwBtn}
        onChange={pwClick}
      ></PwTbx>
      <br />
      <LoginBtn id="idIsLoginBtn">로그인</LoginBtn>
      <br />
      <OtherLoginServicesUl>
        <OtherLoginServices onClick={() => navigate("/findid")}>
          아이디 찾기
        </OtherLoginServices>
        <OtherLoginServices onClick={() => navigate("/findpw")}>
          비밀번호 찾기
        </OtherLoginServices>
        <OtherLoginServices onClick={() => navigate("/join")}>
          회원 가입
        </OtherLoginServices>
      </OtherLoginServicesUl>
    </WholeDiv>
  );
};

export default Login;
