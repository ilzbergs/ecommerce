import { Link } from "react-router-dom"
import styled from "styled-components"
import ContentContainer from "../components/ContentContainer/ContentContainer"
import Footer from "../components/Footer/Footer"
import SideBar from "../components/SideBar/SideBar"


const Wrapper = styled.aside`
display: flex;
`
const CardWrapper =styled.div`
display: flex;
flex-flow: row wrap;
width: 100%;
max-width:64rem;
margin-bottom:50px;
justify-content:center;
padding-top: 3rem;
`  
const StyledCard = styled(Link)`
width:200px;
height:100px;
background-color: #eef5f5;
font-weight: 700;
border-radius: 6px;
text-align: center;
align-items: center;
display: flex;
flex-flow: column;
justify-content: center;
margin: 20px;
cursor: pointer;
  text-decoration: none;
    &:visited {
        color: #112D4E;
    }
    &:hover {
  text-decoration: underline;
  }
 transition: all 250ms ease-in-out;
 
@media screen and (min-width: 426px) {
  width: 255px;
  height: 125px;
}
@media screen and (min-width: 1024px) {
 width: 205px;
  height: 170px;
}
` 
const Image = styled.img`
background-color:red;
width: 100%;
height: 100%;
 &:hover {
    transform: translateY(-3px);
  }
`

const Name = styled.div`
 
`
const Header = styled.div`
 width: 100%;
 max-width: 64rem;
 display: flex;
 justify-content: center;
 font-size: 30px;
 margin-top: -2rem;
 @media screen and (max-width: 764px) {
margin-top: 0;
}
`


const Items: React.FC = () => {
    return(
        <><ContentContainer>
            <Wrapper>
                <SideBar />
                <CardWrapper>
                     <Header>Category Name</Header>
                    <StyledCard onClick={(): void => { } } to={`/items`}>
                        <Image src='' alt="" />
                        <Name>Item name</Name>
                    </StyledCard>
                    <StyledCard onClick={(): void => { } } to={`/items`}>
                        <Image src='' alt="" />
                        <Name>Item name</Name>
                    </StyledCard>
                    <StyledCard onClick={(): void => { } } to={`/items`}>
                        <Image src='' alt="" />
                        <Name>Item name</Name>
                    </StyledCard>
                    <StyledCard onClick={(): void => { } } to={`/items`}>
                        <Image src='' alt="" />
                        <Name>Item name</Name>
                    </StyledCard>
                    <StyledCard onClick={(): void => { } } to={`/items`}>
                        <Image src='' alt="" />
                        <Name>Item name</Name>
                    </StyledCard>
                    <StyledCard onClick={(): void => { } } to={`/items`}>
                        <Image src='' alt="" />
                        <Name>Item name</Name>
                    </StyledCard>
                    <StyledCard onClick={(): void => { } } to={`/items`}>
                        <Image src='' alt="" />
                        <Name>Item name</Name>
                    </StyledCard>
                    <StyledCard onClick={(): void => { } } to={`/items`}>
                        <Image src='' alt="" />
                        <Name>Item name</Name>
                    </StyledCard>
                    <StyledCard onClick={(): void => { } } to={`/items`}>
                        <Image src='' alt="" />
                        <Name>Item name</Name>
                    </StyledCard>
                    <StyledCard onClick={(): void => { } } to={`/items`}>
                        <Image src='' alt="" />
                        <Name>Item name</Name>
                    </StyledCard>
                    <StyledCard onClick={(): void => { } } to={`/items`}>
                        <Image src='' alt="" />
                        <Name>Item name</Name>
                    </StyledCard>
                    <StyledCard onClick={(): void => { } } to={`/items`}>
                        <Image src='' alt="" />
                        <Name>Item name</Name>
                    </StyledCard>

                </CardWrapper>
            </Wrapper>
        </ContentContainer>
        <Footer />
        </>
    )
}

export default Items