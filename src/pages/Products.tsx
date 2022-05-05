import { Link } from "react-router-dom"
import styled from "styled-components"
import ContentContainer from "../components/ContentContainer/ContentContainer"
import Footer from "../components/Footer/Footer"
import SideBar from "../components/SideBar/SideBar"

const Wrapper = styled.aside`
display: flex;
`
const CardWrapper = styled.div`
display: flex;
flex-flow: row wrap;
width: 100%;
max-width:64rem;
margin-bottom:50px;
justify-content:center;
`
const StyledCard = styled(Link)`
width:200px;
height:100px;
background-color: aqua;
font-weight: 700;
border-radius: 6px;
text-align: center;
align-items: center;
display: flex;
justify-content: center;
margin: 20px;
cursor: pointer;
  text-decoration: none;
    &:visited {
        color: #112D4E;
    }
 transition: all 250ms ease-in-out;
  &:hover {
    box-shadow: 0 4px 1rem -4px #000;
    transform: translateY(-3px);
  }
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
const Products: React.FC = () => {
    return (
        <><ContentContainer>

            <Wrapper>
                <SideBar />
                <CardWrapper>
                    <Header>Category Name</Header>
                    <StyledCard onClick={(): void => { }} to={`/product-name`}>
                        <img src='' alt="" />
                        <Name>Item name</Name>
                    </StyledCard>
                    <StyledCard onClick={(): void => { }} to={'/product-name'}>
                        <img src='' alt="" />
                        <div>Item name</div>
                    </StyledCard>
                    <StyledCard onClick={(): void => { }} to={'/product-name'}>
                        <img src='' alt="" />
                        <div>Item name</div>
                    </StyledCard>
                    <StyledCard onClick={(): void => { }} to={'/product-name'}>
                        <img src='' alt="" />
                        <div>Item name</div>
                    </StyledCard>
                    <StyledCard onClick={(): void => { }} to={'/product-name'}>
                        <img src='' alt="" />
                        <div>Item name</div>
                    </StyledCard>
                    <StyledCard onClick={(): void => { }} to={`/product-name`}>
                        <img src='' alt="" />
                        <Name>Item name</Name>
                    </StyledCard>
                    <StyledCard onClick={(): void => { }} to={'/product-name'}>
                        <img src='' alt="" />
                        <div>Item name</div>
                    </StyledCard>
                    <StyledCard onClick={(): void => { }} to={'/product-name'}>
                        <img src='' alt="" />
                        <div>Item name</div>
                    </StyledCard>
                    <StyledCard onClick={(): void => { }} to={'/product-name'}>
                        <img src='' alt="" />
                        <div>Item name</div>
                    </StyledCard>
                    <StyledCard onClick={(): void => { }} to={'/product-name'}>
                        <img src='' alt="" />
                        <div>Item name</div>
                    </StyledCard>

                </CardWrapper>
            </Wrapper>
        </ContentContainer>
            <Footer />
        </>
    )
}

export default Products