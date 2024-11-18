import { useLocation, useNavigate } from "react-router-dom";

const ShowId = () => {
  const location = useLocation();
  const userId = location.state?.email;
  const navigate = useNavigate();

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "44px",
          marginTop: "3rem",
        }}
      >
        아이디는
      </h1>
      <br />
      <p
        style={{
          fontSize: "44px",
          margin: "2rem 0 4rem 0rem",
          textAlign: "center",
          color: "red",
          fontWeight: "bold",
        }}
      >
        {userId}
      </p>

      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "200px",
          textAlign: "center",
          margin: "0 auto",
          cursor: "pointer",
        }}
      >
        <li onClick={() => navigate("/login")}>로그인</li>
        <li onClick={() => navigate("/findpw")}>비밀번호 찾기</li>
      </ul>
    </div>
  );
};

export default ShowId;
