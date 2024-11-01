import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

// 상단으로 올라가게 해주는 함수
const GoToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// 올라가기 버튼 감싸는 div
const ScrollUpBtnDiv = styled.div`
  text-align: right;
`;

// 올라가기 버튼
const ScrollUpBtn = styled.button`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;

  &:hover {
    box-shadow: inset 1.5px 1.5px gray;
  }
`;

const AutoScrollUp = () => {
  return (
    <ScrollUpBtnDiv>
      <div
        style={{
          height: "70px",
          position: "fixed",
          bottom: "2%",
          right: "3%",
        }}
      >
        <ScrollUpBtn onClick={GoToTop}>
          <FontAwesomeIcon icon={faArrowUp} size="xl" />
        </ScrollUpBtn>
      </div>
    </ScrollUpBtnDiv>
  );
};

export default AutoScrollUp;
