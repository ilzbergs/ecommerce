
import styled from "styled-components"
import Product from "./Product"

const Wrapper = styled.div`
width: 100%;
 display: flex;
 flex-direction: column;
 `
const Btn = styled.button`
width: 100%;
background-color: rgb(17, 45, 78);
color: white;
font-size: 20px;
cursor: pointer;
`

const ProductList: React.FC = () => {
    return (
        <>
            <Wrapper>
                <Product />
                <Product />
                <Product />
                <Btn type="submit">Checkout</Btn>
            </Wrapper>


        </>
    )
}

export default ProductList