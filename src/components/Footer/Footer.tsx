import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

const FooterText = styled.footer`
  text-align: center;
  padding-bottom: 1rem;
  font-size: 12px;
`
const SocialBar = styled.div`
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  font-size: 18px;
`
const SocIcons = styled.a`
  cursor: pointer;
  padding: 20px;
  display: block;
`
const Footer: React.FC = () => {
  return (
    <>
      <SocialBar>
        <SocIcons>
          <FontAwesomeIcon icon={faFacebook} onClick={() => { console.log('clicked Facebook') }} ></FontAwesomeIcon>
        </SocIcons>
        <SocIcons>
          <FontAwesomeIcon icon={faTwitter} onClick={() => { console.log('clicked Twitter') }}></FontAwesomeIcon>
        </SocIcons>
        <SocIcons>
          <FontAwesomeIcon icon={faInstagram} onClick={() => { alert("test")}}></FontAwesomeIcon>
        </SocIcons>

      </SocialBar>
      <FooterText>@ 2022 my copyrights</FooterText>
    </>
  )
}

export default Footer