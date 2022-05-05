import styled from "styled-components"

const Container = styled.div`
width: 100%;
text-align:center;
 border-bottom: 8px solid white;
`
const Wrapper = styled.div`
padding: 1rem;
height: 8rem;
display: flex;
 @media screen and (min-width: 764px) {
height: 10rem;
}
`
const Image = styled.img`
width: 6rem;
height: 6rem;
@media screen and (min-width: 764px) {
width: 10rem;
height: 8rem;
}
`
const InfoSideWrapper = styled.div`
padding: 0 1rem;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: space-between;
`
const Text = styled.p`
`
const Price = styled.p`
font-weight: bold;
`
const Product: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
                <InfoSideWrapper>
                     <Text>Product info</Text>
                    <Price>Price: 100 €</Price>
                </InfoSideWrapper>               
            </Wrapper>         
        </Container>
    )
}

export default Product