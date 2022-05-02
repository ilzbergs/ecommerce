import ContentContainer from "../components/ContentContainer/ContentContainer"
import Footer from "../components/Footer/Footer"
import ProductList from "../components/Product/ProductList"

const Cart: React.FC = () => {
    return (
        <>
            <ContentContainer>
                <ProductList/>
            </ContentContainer>
            <Footer />
        </>
    )
}
export default Cart