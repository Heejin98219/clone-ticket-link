import { useLocation } from "react-router-dom";

const ShowId = () => {
  const location = useLocation();
  const userId = location.state?.email;
  return (
    <div
      style={{
        position: "relative",
        border: "3px solid red",
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontSize: "40px",
        }}
      >
        회원님의 아이디는
        {userId}
      </div>
      <div>입니다</div>
    </div>
  );
};

export default ShowId;
