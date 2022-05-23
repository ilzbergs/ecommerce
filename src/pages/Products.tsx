import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Categories/Card";
import ContentContainer from "../components/ContentContainer/ContentContainer";
import Footer from "../components/Footer/Footer";
import SideBar from "../components/SideBar/SideBar";
import Post from "../Interfaces";

const Wrapper = styled.aside`
  display: flex;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  max-width: 64rem;
  margin-bottom: 100px;
  justify-content: center;
`;

const Header = styled.div`
  width: 100%;
  max-width: 64rem;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  font-size: 30px;
  margin-top:1rem;
  
`;
const Products: React.FC = () => {
  const [products, setProduct] = useState<Post[]>();
  const { category } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [category]);
  return (
    <>
      <ContentContainer>
        <Wrapper>
          <SideBar />
          <CardWrapper>
            <Header>{category}</Header>
            {products ? (
              products.map((post) => <Card key={post.id} data={post} />)
            ) : (
              <div>loading...</div>
            )}
          </CardWrapper>
        </Wrapper>
      </ContentContainer>
      <Footer />
    </>
  );
};

export default Products;
