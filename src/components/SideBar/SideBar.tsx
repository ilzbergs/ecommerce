import styled from "styled-components"

const Wrapper = styled.aside`
display: none;
padding-left: 45px;
@media screen and (min-width: 1024px) {
 display: block;
}
`
const ListName = styled.div`
font-size: 24px;
text-align: center;
background-color: #d4d6d6;
`

const CatName = styled.li`
list-style: none;
line-height: 30px;
cursor: pointer;
width:140px;
background-color: #f0ebeb;
margin: 5px 0;
text-align: center;
word-wrap: break-word;

`
const SideBar: React.FC = () => {
    return (
        <Wrapper>
            <ListName>Categories</ListName>
            <CatName>Category 1</CatName>
            <CatName>Category 2</CatName>
            <CatName>Category 3</CatName>
            <CatName>Category 5</CatName>
            <CatName>Category 6</CatName>
        </Wrapper>
    )
}

export default SideBar