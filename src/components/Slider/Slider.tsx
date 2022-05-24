import { useState } from "react";
import styled from "styled-components";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import slide4 from "../../assets/slide4.jpg";
import slide5 from "../../assets/slide5.jpg";
import arrowL from "../../assets/arrowL.svg";
import arrowR from "../../assets/arrowR.svg";

const sliderData = [
    {
        id: 1,
        img: slide1,
        title: "slide 1 title",
        url: "/path1",
    },
    {
        id: 2,
        img: slide2,
        title: "slide 2 title",
        url: "/path2",
    },
    {
        id: 3,
        img: slide3,
        title: "slide 3 title",
        url: "/path3",
    },
    {
        id: 4,
        img: slide4,
        title: "slide 4 title",
        url: "/path4",
    },
    {
        id: 5,
        img: slide5,
        title: "slide 1 title",
        url: "/path1",
    },
];

const StyledSlider = styled.div`
    margin-bottom: 4rem;
    width: 100%;
    position: relative;
    z-index: 1;
    max-width: 64rem;
    padding-top:2rem;
`
const NavButton = styled.button<{ left?: boolean }>`
  position:absolute;
  top: 20%;
  width: 2rem;
  height: 2rem;
  padding: 1rem;
  background: url(${arrowR}) center/30% no-repeat;
  border-radius: 50%;
  right: 3rem;
  background-color: white;
  opacity: 0.3;
  top: 10rem;
  cursor: pointer;
  ${(props) =>
        props &&
        props.left &&
        `
    background-image: url(${arrowL});
    left: 3rem;
    top:10rem;
    right: unset; 
  `}
`;

const Banner = styled.div<{ bg: string }>`
  width: 100%;
  height: 16rem;
  text-align: center;
  background: url(${(props) => props && props.bg}) center/90% no-repeat;
`;

const Title = styled.h3`
font-size: 24px;
color: white;
text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`
const Slider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const prevHandler = () => {
        setCurrentSlide(
            currentSlide > 0 ? currentSlide - 1 : sliderData.length - 1
        );
    };
    const nextHandler = () => {
        setCurrentSlide(
            currentSlide === sliderData.length - 1 ? 0 : currentSlide + 1
        );
    };

    return (
        <>
            <StyledSlider>
                <Banner
                    key={sliderData[currentSlide].id}
                    bg={sliderData[currentSlide].img}
                >
                    <Title>{sliderData[currentSlide].title}</Title>
                </Banner>
                <NavButton left onClick={prevHandler} />
                <NavButton onClick={nextHandler} />
            </StyledSlider></>
    );
}

export default Slider;