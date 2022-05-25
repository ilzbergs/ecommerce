
import { useContext } from "react"
import styled from "styled-components"
import CartContext from "../CartContext"
import ContentContainer from "../components/ContentContainer/ContentContainer"
import Footer from "../components/Footer/Footer"
import ProductCart from "../components/ProductCart/ProductCart"
import Post from "../Interfaces"

const Header = styled.div`
width: 100%;
height: 3rem;
align-items: center;
text-transform: uppercase;
font-weight: 600;
background-color: antiquewhite;
display: flex;
justify-content: space-around;
@media screen and (max-width: 768px) {
display: none;
}
`
const Price = styled.div`
font-size: 30px;
width: 100%;
text-align: right;
margin-right: 10rem;
`
const Btn = styled.button`
width: 14rem;
height: 2rem;
text-transform: uppercase;
font-weight: 700;
background-color: tomato;
border: none;
margin-top: 1rem;
cursor: pointer;
&:hover{
    transform: scale(1.1);
}
`
const Cart: React.FC = () => {
    const { cartValue } = useContext(CartContext);
    return (
            <>
            <ContentContainer>
            <Header>
                <div>Item</div>
                <div></div>
                <div>Price</div>
                <div>Amount</div>
            </Header>
            {cartValue &&
                cartValue.map((data: Post) => {
                    return (
                        <ProductCart key={data.id} data={data} />
                    )
                })}
            <Price>Price total:     €</Price>
            <Btn>Checkout</Btn>
        </ContentContainer><Footer />
        </> 
    )
}
export default Cart