import styled from "styled-components"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Wrapper = styled.aside`
display: none;
padding-left: 45px;
display: flex;
flex-direction: column;
  @media screen and (max-width: 768px) {
   position: absolute;
   z-index: 1;
}
`
const BurgerMenu = styled.i`
display: flex;
margin-right: 1rem;
`
const ListName = styled.button`
font-size: 22px;
border: 0;
text-align: center;
width: 200px;
height: 2.5rem;
background-color: #ffd503;
display: flex;
margin: 0 15px;
padding: 0 10px;
align-items: center;
justify-content: center;
`
const CatName = styled.li`
list-style: none;
font-size: 16px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
width:200px;
margin: 0 15px;
height: 2rem;
background-color: #fff;
border-bottom: 1px solid #e1e1e1;
text-align: center;
word-wrap: break-word;
 &:hover {
       background-color: #e1e1e1;
       transition: all 250ms ease;
    
 }
`
const CategWrapper = styled.div`
position: absolute;
top: 8.5rem;
transition: all 250ms ease-in-out;
 @media screen and (max-width: 768px) {
  top: 2.5rem;
}
`
const SideBar: React.FC = () => {
    const [openSideBar, setOpenSideBar] = useState(true)
    return (
        <Wrapper>
            <ListName onClick={() => setOpenSideBar(!openSideBar)}>
                {openSideBar && (<CategWrapper>
                    <CatName>Category 1</CatName>
                    <CatName>Category 2</CatName>
                    <CatName>Category 3</CatName>
                    <CatName>Category 4</CatName>
                    <CatName>Category 5</CatName>
                    <CatName>Category 6</CatName>
                    <CatName>Category 1</CatName>
                    <CatName>Category 2</CatName>
                    <CatName>Category 3</CatName>
                    <CatName>Category 4</CatName>
                    <CatName>Category 5</CatName>
                    <CatName>Category 6</CatName>
                </CategWrapper>)}
                <BurgerMenu>
                    <GiHamburgerMenu />
                </BurgerMenu>Categories</ListName>
        </Wrapper>
    )
}

export default SideBar