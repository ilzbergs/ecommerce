import styled from "styled-components"
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const FooterContainer = styled.div`
 width: 100%;
    /* max-width: 64rem; */
    margin: 0 auto;
    display: flex;
    flex-direction: row; 
    justify-content:center;
    align-items: center; 
    /* position:fixed;
    bottom: 0; */

`

const FooterRow = styled.footer`
margin-top: 2rem;
bottom: 0;
width: 100%;
max-width: 64rem;
`

const FooterText = styled.footer`
  text-align: center;
  padding-bottom: 1rem;
  font-size: 16px;
  
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
  font-size: 24px;
  display: block;
    &:visited {
        color: black;
    }
`
const Footer: React.FC = () => {
  return (
    <>
      <FooterContainer>
        <FooterRow>
          <SocialBar>
            <SocIcons href="https://www.facebook.com/" target='_blank'><BsFacebook />
            </SocIcons>
            <SocIcons href="https://www.twitter.com/" target='_blank'><BsTwitter />

            </SocIcons>
            <SocIcons href="https://www.instagram.com/" target='_blank'><BsInstagram />

            </SocIcons>

          </SocialBar>
          <FooterText>@ 2022 my copyrights</FooterText>
        </FooterRow>
      </FooterContainer>

    </>
  )
}

export default Footer