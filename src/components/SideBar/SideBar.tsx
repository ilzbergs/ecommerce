import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Wrapper = styled.aside`
  padding-left: 45px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    position: absolute;
    z-index: 1;
  }
  @media screen and (max-width: 429px) {
    left: -1.5rem;
  }
`;
const BurgerMenu = styled.i`
  display: flex;
  margin-right: 1rem;
`;
const ListName = styled.button`
  font-size: 22px;
  border: 0;
  text-align: center;
  width: 200px;
  height: 2.5rem;
  background-color: #ffd503;
  display: flex;
  margin: 0 15px;
  padding: 0 10px;
  align-items: center;
  justify-content: center;
`;
const CatName = styled(Link)`
  list-style: none;
  text-transform: capitalize;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 200px;
  margin: 0 15px;
  height: 2rem;
  text-decoration: none;
  &:visited {
    color: #112d4e;
  }
  background-color: #fff;
  border-bottom: 1px solid #e1e1e1;
  text-align: center;
  word-wrap: break-word;
  &:hover {
    background-color: #e1e1e1;
    transition: all 250ms ease;
  }
`;
const CategWrapper = styled.div`
  position: absolute;
  top: 8.5rem;
  @media screen and (max-width: 768px) {
    top: 2.5rem;
  }
  @media screen and (min-width: 768px) {
    margin-top: 1rem;
  }
`;
const SideBar: React.FC = () => {
  const [categoryData, setCategoryData] = useState<string[]>();
  const [openSideBar, setOpenSideBar] = useState(false);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategoryData(data));
  }, []);

  const SideBarHandler = () => {
    isMobile && setOpenSideBar(!openSideBar);
  };

  useEffect(() => {
    !isMobile && setOpenSideBar(true);
  }, [isMobile]);

  return (
    <Wrapper>
      <ListName onClick={SideBarHandler}>
        {openSideBar && (
          <CategWrapper onClick={() => console.log("Test")}>
            <div>
              {categoryData ? (
                categoryData.map((category) => {
                  return (
                    <CatName
                      key={category}
                      onClick={(): void => { }}
                      to={`/category/${category}`}
                    >
                      {category}
                    </CatName>
                  );
                })
              ) : (
                <div>loading...</div>
              )}
            </div>
          </CategWrapper>
        )}
        <BurgerMenu>
          <GiHamburgerMenu />
        </BurgerMenu>
        Categories
      </ListName>
    </Wrapper>
  );
};

export default SideBar;
