import Card from "../components/Categories/Card"
import ContentContainer from "../components/ContentContainer/ContentContainer"
import Footer from "../components/Footer/Footer"
import SideBar from "../components/SideBar/SideBar"
import Slider from "../components/Slider/Slider"

const HomePage: React.FC = () => {
    return (
        <>
            <ContentContainer>
                <SideBar />
                <Slider />
                <Card />
            </ContentContainer>
            <Footer />
        </>
    )
}
export default HomePage