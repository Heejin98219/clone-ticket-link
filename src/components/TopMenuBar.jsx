const TopMenuBar = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#efefef",
        height: "27px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          margin: "0 auto",
        }}
      >
        <ul
          style={{
            display: "inline-block",
            marginTop: "7px",
          }}
        >
          <li
            style={{
              fontSize: "11px",
            }}
          >
            KOR&nbsp;▼
          </li>
        </ul>
        <ul
          style={{
            display: "flex",
            width: "35%",
            justifyContent: "space-evenly",
            cursor: "pointer",
            fontSize: "11px",
            marginTop: "7px",
          }}
        >
          <li
            style={{
              display: "inline-block",
            }}
          >
            로그인
          </li>
          <li
            style={{
              display: "inline-block",
            }}
          >
            예매확인/취소
          </li>
          <li
            style={{
              display: "inline-block",
            }}
          >
            회원가입
          </li>
          <li
            style={{
              display: "inline-block",
            }}
          >
            고객센터
          </li>
          <li
            style={{
              display: "inline-block",
            }}
          >
            PAYCO
          </li>
          <li
            style={{
              display: "inline-block",
            }}
          >
            관계사
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopMenuBar;
