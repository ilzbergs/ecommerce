import styled from "styled-components";
import Post from "../Interfaces";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

const StyledCard = styled.div`
width: 100%;
text-align: left;
max-width: 64rem;
`
const Image = styled.img`
width: 20rem;
height: 20rem;
margin-bottom: 2rem;
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
@media screen and (min-width: 1024px) {
flex-direction: row;
}

`
const Desription = styled.div`
width: 100%;
`
const Title = styled.div`
text-transform: uppercase;
text-align: center;
font-weight: 600;
padding-bottom: 1rem;
`
const Price = styled.div`
padding-top: 1rem;
text-align: right;
font-weight: bolder;
@media screen and (min-width: 1024px) {
padding-top: 6rem;
text-align: center;
}
`
const Btn = styled.button`
width: 10rem;
height: 2rem;
margin: 0 auto;
text-align: center;
align-items: center;
align-content: center;
display:flex ;
justify-content: center;
text-transform: uppercase;
font-size: 18px;
background-color: tomato;
border: none;
cursor: pointer;
 &:hover {
    transform: scale(1.1);
  }
  @media screen and (min-width: 1024px) {
margin-top: 3rem;
text-align: center;
}
`
const Info = styled.div`
width: 100%;
position: relative;
`
const Wishlist = styled.div`
text-align: right;
font-size: 30px;

`

const SingleProduct: React.FC<{data: Post  }> = ({ data }) => {
    const { id, image, description, price, title } = data;
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(current => !current);
    };
    return (
        <>
            <StyledCard>
                <Wrapper>
                    <div>
                        <Title>{title}</Title>
                        <Image src={image} alt="" />
                    </div>
                    <Info>
                        <Wishlist>
                            <AiOutlineHeart style={{
                                color: isActive ? 'red' : '',
                            }} onClick={() => handleClick()} />
                        </Wishlist>
                        <Price>{price}</Price>
                        <Btn onClick={() => console.log('added to cart')}>Add to cart</Btn>
                    </Info>
                </Wrapper>
                <Desription>{description}</Desription>
            </StyledCard>

        </>

    )
}

export default SingleProduct