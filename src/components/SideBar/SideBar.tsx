import styled from "styled-components"


const Wrapper = styled.aside`
display: none;
width: 120px;






`


const SideBar: React.FC = () => {
    return (
        <Wrapper>
            <div>Category list</div>
            <div>Category 1</div>
            <div>Category 2</div>
            <div>Category 3</div>
            <div>Category 4</div>
            <div>Category 5</div>
            <div>Category 6</div>

        </Wrapper>
    )
}

export default SideBar