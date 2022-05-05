
import styled from "styled-components"
import ContentContainer from "../components/ContentContainer/ContentContainer"
import Footer from "../components/Footer/Footer"
import Product from "../components/Product/Product"

const Wrapper = styled.div`
width: 100%;
height: 100vh;
`

const WishList: React.FC = () => {
    return (
        <><ContentContainer>
            <Wrapper>
                <Product />
                <Product />
                <Product />
                <Product />
            </Wrapper>
        </ContentContainer>
            <Footer /></>
    )
}
export default WishList