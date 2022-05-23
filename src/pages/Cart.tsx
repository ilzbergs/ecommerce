import { dividerClasses } from "@mui/material"
import { Key, useContext } from "react"
import styled from "styled-components"
import CartContext from "../CartContext"
import ContentContainer from "../components/ContentContainer/ContentContainer"
import Footer from "../components/Footer/Footer"
import ProductCart from "../components/ProductCart/ProductCart"
import Post from "../Interfaces"
// import ProductList from "../components/ProductCart/ProductList"

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
                        return (<>
                            <ProductCart key={data.id} data={data} />
                            <button>Checkout</button>
                            <div>Price total: €</div>
                        </>);
                    })
                }          
            </ContentContainer>
            <Footer />
        </>
    )
}
export default Cart