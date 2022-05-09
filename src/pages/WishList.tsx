
import styled from "styled-components"
import ContentContainer from "../components/ContentContainer/ContentContainer"
import Footer from "../components/Footer/Footer"

const Wrapper = styled.div`
width: 100%;
height: 100vh auto;
padding: 2rem; 
display: flex;
flex-flow: wrap;
justify-content: center;
`
const Image = styled.img`
width: 15rem;
height: 10rem;
margin: 0.5rem;
  
`


const WishList: React.FC = () => {
    return (
        <><ContentContainer>
            <div>Your wishlist</div>
            <Wrapper>
                <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
                <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
                <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
                <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
                <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
                <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
                <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
            </Wrapper>
        </ContentContainer>
            <Footer /></>
    )
}
export default WishList