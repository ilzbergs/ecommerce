import styled from "styled-components"
import { AiOutlineClose } from "react-icons/ai";
import { useContext, useState } from "react";
import CartContext from "../../CartContext";
import Post from "../../Interfaces";

const Container = styled.div`
width: 100%;
text-align:center;
 border-bottom: 8px solid white;
`
const Wrapper = styled.div`
padding: 1rem;
height: 13rem;
display: flex;
 @media screen and (min-width: 769px) {
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
@media screen and (min-width: 430px) {
width: 8rem;
height: rem;
}
@media screen and (min-width: 769px) {
width: 10rem;
height: 8rem;
}
`
const InfoSideWrapper = styled.div`
padding: 0 1rem;
width: 100%;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-end;
@media screen and (min-width: 430px) {
align-items: center;
}
@media screen and (min-width: 769px) {
flex-direction: row;
justify-content: space-between;
width: 100%;
align-items: baseline;
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
const ProductCart: React.FC<{ data: Post }> = ({ data }) => {
    const { image, title, price } = data;
    const [state, setState] = useState(1);
    

    return (
        <Container>
            <Wrapper>
                <Image src={image} alt="" />
                <InfoSideWrapper>
                    <Text>{title}
                    </Text>
                    <Price>{price*state} €</Price>
                    <Input
                        type="number"
                        value={state}
                        min='1'
                        max='10'
                        onChange={e => {
                            setState(Number(e.target.value))
                        }}
                    />
                </InfoSideWrapper>
                <CloseBtn><AiOutlineClose /></CloseBtn>
            </Wrapper>
        </Container>
    )
}

export default ProductCart
