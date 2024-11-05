import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

// 저작권 + sns 로고
const FooterDiv = styled.div`
  display: flex;
  margin-top: 15rem;
  /* border-top: 3px solid black; */
  border-width: 0 0 3px 3px;
`;

// 저작권 문구
const CopyRightText = styled.div`
  width: 50%;
  margin: 0 auto;
  text-align: center;
  /* color: #ccc; 위 좌우 밑 */
  padding-top: 7rem;
`;

// sns 아이콘 전체를 감싸는 div
const SnsIconsDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  padding: 1.5rem;
`;

// sns 아이콘 각각을 감싸는 div
// fontawesome 자체에 Link태그를
// 넣을 수 없기 때문에 a태그를 사용
const SnsIconDiv = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`;

// sns 아이콘 전체를 감싸는 div
const SnsIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 267px;
  margin-top: 200px;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <FooterDiv>
      <CopyRightText>
        Copyright © NHN LINK Corporation. All rights reserved.
      </CopyRightText>
      <SnsIconsDiv>
        <SnsIcons>
          <SnsIconDiv href="https://blog.naver.com/t_link">
            <FontAwesomeIcon icon={faMessage} size="xl" />
          </SnsIconDiv>
          <SnsIconDiv href="https://www.youtube.com/@ticketlink012">
            <FontAwesomeIcon icon={faYoutube} size="xl" />
          </SnsIconDiv>
          <SnsIconDiv href="https://www.facebook.com/ticketlink">
            <FontAwesomeIcon icon={faFacebook} size="xl" />
          </SnsIconDiv>
          <SnsIconDiv href="https://www.instagram.com/ticketlink.co.kr/">
            <FontAwesomeIcon icon={faSquareInstagram} size="xl" />
          </SnsIconDiv>
          <SnsIconDiv href="https://x.com/nhn_ticketlink">
            <FontAwesomeIcon icon={faXTwitter} size="xl" />
          </SnsIconDiv>
        </SnsIcons>
      </SnsIconsDiv>
    </FooterDiv>
  );
};

export default Footer;
