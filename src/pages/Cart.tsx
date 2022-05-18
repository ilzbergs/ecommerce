import styled from "styled-components"
import ContentContainer from "../components/ContentContainer/ContentContainer"
import Footer from "../components/Footer/Footer"
import ProductList from "../components/ProductCart/ProductList"

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
    return (
        <>
            <ContentContainer>
                 <Header>
                <div>Prece</div>
                <div></div>
                <div>Cena</div>
                <div>Daudzums</div>
            </Header>
                <ProductList/>
            </ContentContainer>
            <Footer />
        </>
    )
}
export default Cart