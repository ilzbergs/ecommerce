import { Link } from "react-router-dom"
import styled from "styled-components"
import { useState } from "react"
import React from 'react';
import { Button, Menu, MenuItem } from "@mui/material"
import { AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch,} from "react-icons/ai";
import { FaBars} from "react-icons/fa";


const Header = styled.div`
    display: flex;
    padding: 0;
    width: 100%;
    max-width: 64rem;
    background-color: aliceblue;
    align-items: center;
    justify-content: center;
      @media screen and (min-width: 430px) {
    padding: 1.5rem;
}
`
const HeaderSection1 = styled.div`
    width: calc(100%/3);
    display: flex;
    justify-content: flex-start;
`
const HeaderSection2 = styled.div`
    width: calc(100%/3);
    display: flex;
    justify-content: flex-end;
`
const HeaderSection3 = styled.div`
    width: calc(100%/3);
    display: flex;
    justify-content: flex-end;
`

const Logo = styled.a`
    width: 5rem;
    height: 2rem;
    margin-left: 1rem;
    display: block;
    background-image: url('https://cashafish.com/wp-content/uploads/2021/05/NGT-Latvia.png');
    background-size: cover;
    background-repeat: no-repeat; 
`
const NavLink = styled(Link)`
    width: 100%;
    padding:5px;
    text-decoration: none;
    &:visited {
        color: #112D4E;
    }
     @media screen and (min-width: 768px) {
  padding: 15px;
    }
`
const NavWrapper = styled.div`
display: flex;
align-items: center;
    @media screen and (min-width: 430px) {
    display: none;
}
`
const NavWrapperTablet = styled.div`
    @media screen and (max-width: 429px) {
    display: none;
}
`
const Search = styled.div`
    color: #112D4E;
  width: 235px;
  min-width: 155px;
  max-width: 235px;
   height: 35px;
   border-radius: 30px;
   display: flex;
   background-color: white;
   align-items: center;
   padding: 10px;
    @media screen and (max-width: 429px) {
        display: none;
    }
       @media screen and (max-width: 768px) {
  width:155px;
  height: 25px;
    }
`
const Input = styled.input`
     height: 25px;
     width: 120px;
     border: none;
     outline: none;
     border-radius: 35px;
       @media screen and (min-width: 769px) {
        width: 200px;
        height: 35px;
    }
`
const SearchIcon = styled.i`
    font-size: 24px;
   position: absolute;
   top: 30px;
`
const Icon = styled.i`
    font-size: 24px;
     @media screen and (min-width: 768px) {
   font-size: 30px;
    }
`
const OpenSearch= styled.div`
  display: flex;
 flex-direction: row-reverse;
`

const Nav: React.FC = () => {
    const [showInput, setShowInput] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (

        <Header>
            <HeaderSection1>
                <Logo href="/" />
            </HeaderSection1>
            <HeaderSection2>
                <Search>
                    <label htmlFor="search">
                        <Input type="text" id="search" name="search" placeholder="Search for..."/>
                        <SearchIcon>< AiOutlineSearch /></SearchIcon>
                    </label>
                </Search>
            </HeaderSection2>
            <HeaderSection3>
                <NavWrapper>
                    <NavLink to="">
                      <OpenSearch>
                             <Icon>
                            <AiOutlineSearch onClick={() => setShowInput(!showInput)} />
                        </Icon>
                        {showInput && (
                            <Input type="text" placeholder="Search for..."></Input>
                        )}
                      </OpenSearch>
                     
                    </NavLink>
                    <NavLink to="/">
                        <Button
                            id="fade-button"
                            aria-controls={open ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            color={'primary'}
                        >
                            <Icon>
                                <FaBars color="#112D4E" />
                            </Icon>
                        </Button>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>User</MenuItem>
                            <MenuItem onClick={handleClose}>Wishlist</MenuItem>
                            <MenuItem onClick={handleClose}>My Cart</MenuItem>
                        </Menu>
                    </NavLink>
                </NavWrapper>
                <NavWrapperTablet>
                    <NavLink to=''>
                        <Icon><AiOutlineUser /></Icon>
                    </NavLink>
                    <NavLink to=''>
                        <Icon><AiOutlineHeart /></Icon>
                    </NavLink>
                    <NavLink to=''>
                        <Icon><AiOutlineShoppingCart /></Icon>
                    </NavLink>
                </NavWrapperTablet>
            </HeaderSection3>
        </Header>

    )
}

export default Nav