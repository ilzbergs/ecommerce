
import { useContext } from "react"
import styled from "styled-components"
import ContentContainer from "../components/ContentContainer/ContentContainer"
import Footer from "../components/Footer/Footer"
import Post from "../Interfaces"
import WishListCard from "../WishListCard/WishListCard"
import WishListContext from "../WishListContext"

const Wrapper = styled.div`
width: 100%;
height: 80vh ;
padding: 2rem; 
display: flex;
flex-flow: wrap;
justify-content: center;
`
// const Image = styled.img`
// width: 15rem;
// height: 10rem;
// margin: 0.5rem;
// `
const WishList: React.FC = () => {
    const { wishListValue } = useContext(WishListContext);
    return (
        <><ContentContainer>
            <div>Your wishlist</div>
            <Wrapper>
                {wishListValue &&
                    wishListValue.map((data: Post) => {
                        return (
                            <WishListCard key={data.id} data={data} />
                        )
                    })
                }
            </Wrapper>
        </ContentContainer>
            <Footer /></>
    )
}
export default WishList