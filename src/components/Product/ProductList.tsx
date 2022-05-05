
import styled from "styled-components"
import Product from "./Product"

const Wrapper = styled.div`
width: 100%;
 display: flex;
 flex-direction: column;
 `
const Price = styled.div`
display: flex;
justify-content: flex-end;
padding:1rem;
font-size: 24px;
font-weight: 800;
text-decoration: underline;
 `

const Btn = styled.button`
width: 100%;
background-color: rgb(17, 45, 78);
color: white;
font-size: 20px;
cursor: pointer;
margin-bottom: 50px;
@media screen and (min-width: 764px) {
width: 10rem;
height: 2rem;
margin: 50px auto;
display: block;
}
`

const ProductList: React.FC = () => {
    return (
        <>
            <Wrapper>
                <Product />
                <Product />
                <Product />
                <Price>Price total: 300</Price>
                <div>
                    <Btn type="submit" onClick={(): void => { console.log('Clicked') }}>Checkout</Btn>
                </div>

            </Wrapper>


        </>
    )
}

export default ProductList