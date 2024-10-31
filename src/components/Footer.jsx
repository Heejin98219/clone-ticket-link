import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

import styled from "styled-components";

// 저작권 + sns 로고
const FooterDiv = styled.div`
  width: 1390px;
  display: flex;
  margin-top: 15rem;
  border: 3px solid pink;
  padding-bottom: 3rem;
`;

// 저작권 문구
const CopyRightText = styled.div`
  width: 50%;
  margin: 0 auto;
  text-align: center;
  color: #aaa;
  padding-top: 2rem;
`;

// sns 아이콘 감싸는 div
const SnsIconsDiv = styled.div`
  width: 50%;
  border: 3px solid green;
`;

const Footer = () => {
  return (
    <FooterDiv>
      <CopyRightText>
        Copyright © NHN LINK Corporation. All rights reserved.
      </CopyRightText>
      <SnsIconsDiv>
        <FontAwesomeIcon icon={faMessage} size="xl" />
        <FontAwesomeIcon icon={faYoutube} size="xl" />
        <FontAwesomeIcon icon={faFacebook} size="xl" />
        <FontAwesomeIcon icon={faSquareInstagram} size="xl" />
        <FontAwesomeIcon icon={faXTwitter} size="xl" />
      </SnsIconsDiv>
    </FooterDiv>
  );
};

export default Footer;
