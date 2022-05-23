import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Categories/Card";
import ContentContainer from "../components/ContentContainer/ContentContainer";
import Footer from "../components/Footer/Footer";
import SideBar from "../components/SideBar/SideBar";
import Slider from "../components/Slider/Slider";
import Post from "../Interfaces";
import UserContext from "../UserContext";

const Wrapper = styled.div`
  display: flex;
`;
const Wrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  max-width: 64rem;
  margin-bottom: 50px;
  justify-content: center;
`;
const HomePage: React.FC = () => {
  const [data, setData] = useState<Post[]>();

  const [openSideBar, setOpenSideBar] = useState(false);
  const isMobile = window.innerWidth < 768;

  const SideBarHandler = () => {
    isMobile && setOpenSideBar(!openSideBar);
  };

  useEffect(() => {
    !isMobile && setOpenSideBar(true);
  }, [isMobile]);
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <ContentContainer>
        <Wrapper>
          <div>
            <SideBar />
          </div>
          <div>
            <Slider />
            <Wrap>
              {data ? (
                data.map((post) => <Card key={post.id} data={post} />)
              ) : (
                <div>loading...</div>
              )}
            </Wrap>
          </div>
        </Wrapper>
      </ContentContainer>
      <Footer />
    </>
  );
};
export default HomePage;
