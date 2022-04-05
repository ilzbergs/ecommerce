import styled from "styled-components"

const StyledCard = styled.div`
width:200px;
height:100px;
background-color: aqua;
font-weight: 700;
text-align: center;
align-items: center;
display: flex;
justify-content: center;
margin: 10px auto;
`

const Card: React.FC = () => {
    return (
        <>
            <StyledCard>
                <img src='' alt="" />
                <div>Category 1</div>
            </StyledCard>
            <StyledCard>
                <img src='' alt="" />
                <div>Category 2</div>
            </StyledCard>
            <StyledCard>
                <img src='' alt="" />
                <div>Category 3</div>
            </StyledCard>
            <StyledCard>
                <img src='' alt="" />
                <div>Category 4</div>
            </StyledCard>
            <StyledCard>
                <img src='' alt="" />
                <div>Category 5</div>
            </StyledCard>
            <StyledCard>
                <img src='' alt="" />
                <div>Category 6</div>
            </StyledCard>
        </>


    )
}

export default Card