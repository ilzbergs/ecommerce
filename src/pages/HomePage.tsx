
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import Card from "../components/Categories/Card"
import ContentContainer from "../components/ContentContainer/ContentContainer"
import Footer from "../components/Footer/Footer"
import SideBar from "../components/SideBar/SideBar"
import Slider from "../components/Slider/Slider"
import Post from "../Interfaces"
import UserContext from "../UserContext"




const Wrapper = styled.div`
display: flex;
`
const Wrap = styled.div`
display: flex;
flex-flow: row wrap;
width: 100%;
max-width:64rem;
margin-bottom:50px;
justify-content:center;
`
const HomePage: React.FC = () => {
    const [data, setData] = useState([])
   
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setData(data))
    }, [])
    return (
        <>
            <ContentContainer>
                <Wrapper>
                   {/* <SideBar data={undefined}/> */}
                    <div>
                        <Slider />
                        <Wrap>
                            {data.map((post) => {
                                return (
                                    <Card data={post} />
                                )
                            })}
                        </Wrap>
                    </div>
                </Wrapper>
            </ContentContainer>
            <Footer />
        </>
    )
}
export default HomePage