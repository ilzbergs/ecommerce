import { Link } from "react-router-dom"
import styled from "styled-components"
import ContentContainer from "../components/ContentContainer/ContentContainer"
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

const Items: React.FC = () => {
    return(
        <ContentContainer>       
            <Wrapper>
                <SideBar />
                <CardWrapper>
                    <StyledCard onClick={(): void => { }} to={`/items`}>
                        <img src='' alt="" />
                        <div>Item name</div>
                    </StyledCard>
                    <StyledCard onClick={(): void => { }} to={`/items`}>
                        <img src='' alt="" />
                        <div>Item name</div>
                    </StyledCard>
                    <StyledCard onClick={(): void => { }} to={`/items`}>
                        <img src='' alt="" />
                        <div>Item name</div>
                    </StyledCard>
                    <StyledCard onClick={(): void => { }} to={`/items`}>
                        <img src='' alt="" />
                        <div>Item name</div>
                    </StyledCard>
                    <StyledCard onClick={(): void => { }} to={`/items`}>
                        <img src='' alt="" />
                        <div>Item name</div>
                    </StyledCard>
                    <StyledCard onClick={(): void => { }} to={`/items`}>
                        <img src='' alt="" />
                        <div>Item name</div>
                    </StyledCard>
                    <StyledCard onClick={(): void => { }} to={`/items`}>
                        <img src='' alt="" />
                        <div>Item name</div>
                    </StyledCard>
                    <StyledCard onClick={(): void => { }} to={`/items`}>
                        <img src='' alt="" />
                        <div>Item name</div>
                    </StyledCard>
                    <StyledCard onClick={(): void => { }} to={`/items`}>
                        <img src='' alt="" />
                        <div>Item name</div>
                    </StyledCard>
                    <StyledCard onClick={(): void => { }} to={`/items`}>
                        <img src='' alt="" />
                        <div>Item name</div>
                    </StyledCard>
                    <StyledCard onClick={(): void => { }} to={`/items`}>
                        <img src='' alt="" />
                        <div>Item name</div>
                    </StyledCard>
                    <StyledCard onClick={(): void => { }} to={`/items`}>
                        <img src='' alt="" />
                        <div>Item name</div>
                    </StyledCard>

                </CardWrapper>
            </Wrapper>            
        </ContentContainer>
       
    )
}

export default Items