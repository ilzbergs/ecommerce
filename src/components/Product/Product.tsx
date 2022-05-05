import styled from "styled-components"
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Container = styled.div`
width: 100%;
text-align:center;
 border-bottom: 8px solid white;
`
const Wrapper = styled.div`
padding: 1rem;
height: 13rem;
display: flex;
 @media screen and (min-width: 768px) {
height: 10rem;
}
`
const CloseBtn = styled.i`
width: 1.5rem;
height: 1.5rem;
text-align: center;
align-items: center;
font-size: 24px;
cursor: pointer;
&:hover {
   color: tomato;
}
`
const Image = styled.img`
width: 6rem;
height: 6rem;
@media screen and (min-width: 768px) {
width: 10rem;
height: 8rem;
}
`
const InfoSideWrapper = styled.div`
padding: 0 1rem;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: space-between;

@media screen and (min-width: 768px) {
flex-direction: row;
justify-content: space-between;
width: 100%;
}
`
const Text = styled.p`
width: 180px;
max-width: 180px;
`
const Price = styled.p`
font-weight: bold;
`
const Input = styled.input`
width: 8rem;
@media screen and (min-width: 768px) {
height: 1.5rem;
}
`
const Product: React.FC = () => {
    const [state, setState] = useState(1);
    return (
        <Container>
            <Wrapper>
                <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
                <InfoSideWrapper>
                    <Text>Product info</Text>
                    <Price>100.00 €</Price>
                    <Input
                        type="number"
                        value={state}
                        min='1'
                        max='10'
                        onChange={e => {
                            setState(Number(e.target.value));
                        }}
                    />
                </InfoSideWrapper>
                <CloseBtn onClick={(): void => { console.log('Clicked close button') }}><AiOutlineClose /></CloseBtn>
            </Wrapper>
        </Container>
    )
}

export default Product
