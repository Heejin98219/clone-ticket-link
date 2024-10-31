import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

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

const FocusOnTop = () => {
  console.log("클릭");
  window.scrollTo({
    top: "200px",
    behavior: "smooth",
  });
};

const AutoScrollUp = () => {
  return (
    <ScrollUpBtn onClick={FocusOnTop}>
      <FontAwesomeIcon icon={faArrowUp} size="xl" />
    </ScrollUpBtn>
  );
};

export default AutoScrollUp;
