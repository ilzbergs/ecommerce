import { Link, NavLink } from "react-router-dom"
import styled from "styled-components"

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

const Wrap = styled.div`
display: flex;
flex-flow: row wrap;
width: 100%;
max-width:64rem;
margin-bottom:50px;
justify-content:center;
`

const Card: React.FC = () => {
    return (
        <>
            <Wrap>
                <StyledCard onClick={(): void => { }} to={`/category-name`}>
                    <img src='' alt="" />
                    <div>Category 1</div>
                </StyledCard>
                <StyledCard onClick={(): void => { }} to={`/category-name`}>
                    <img src='' alt="" />
                    <div>Category 2</div>
                </StyledCard>
                <StyledCard onClick={(): void => { }} to={`/category-name`}>
                    <img src='' alt="" />
                    <div>Category 3</div>
                </StyledCard>
                <StyledCard onClick={(): void => { }} to={`/category-name`}>
                    <img src='' alt="" />
                    <div>Category 4</div>
                </StyledCard>
                <StyledCard onClick={(): void => { }} to={`/category-name`}>
                    <img src='' alt="" />
                    <div>Category 5</div>
                </StyledCard>
                <StyledCard onClick={(): void => { }} to={`/category-name`}>
                    <img src='' alt="" />
                    <div>Category 6</div>
                </StyledCard>

            </Wrap>

        </>


    )
}

export default Card