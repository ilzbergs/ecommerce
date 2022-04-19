import styled from "styled-components"
import Card from "../components/Categories/Card"
import ContentContainer from "../components/ContentContainer/ContentContainer"
import Footer from "../components/Footer/Footer"
import SideBar from "../components/SideBar/SideBar"
import Slider from "../components/Slider/Slider"

const Wrapper = styled.div`
display: flex;
`



const HomePage: React.FC = () => {
    return (
        <>
            <ContentContainer>            
                <Wrapper>
                    <SideBar />
                    <div>
                        <Slider/>
                        <Card/>
                    </div>
                </Wrapper>
            </ContentContainer>
           <Footer /> 
        </>
    )
}
export default HomePage