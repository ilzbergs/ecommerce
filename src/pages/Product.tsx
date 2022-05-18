import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import styled from "styled-components"
import ContentContainer from "../components/ContentContainer/ContentContainer"
import Footer from "../components/Footer/Footer"
import SingleProduct from "../SingleProduct/SingleProduct"
import UserContext from "../UserContext"



const Wrapper = styled.div`
width: 100%;
height: 100vh;
padding: 2rem; 
display: flex;
flex-flow: wrap;
justify-content: center;
`

const Product: React.FC = () => {
    const { id } = useParams()
    const [products, setProduct] = useState([])
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [id])

    return (
        <>
            <ContentContainer>
                <Wrapper>
                    {/* {products.map((post) => {
                        return (
                            <SingleProduct data={post} key={post} />
                        )
                    })} */}
                    <SingleProduct/>
                </Wrapper>
            </ContentContainer>
            <Footer />
        </>
    )
}
export default Product