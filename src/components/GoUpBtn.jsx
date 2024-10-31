import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

// 폰트어썸 아이콘 스타일
const GoUpBtn = styled.button`
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

// 폰트어썸 아이콘 적용
const AutoGoUp = () => {
  return (
    <GoUpBtn onClick={FocusOnTop}>
      <FontAwesomeIcon icon={faArrowUp} size="xl" />
    </GoUpBtn>
  );
};

export default AutoGoUp;
