import { Link } from "react-router-dom"
import styled from "styled-components"
import { useContext, useState } from "react"
import React from 'react';
import { Button, Menu, MenuItem } from "@mui/material"
import { AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch, } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import UserContext from "../../UserContext";
import LoginForm from "../Login/LoginForm";


const Header = styled.header`
    display: flex;
    padding: 0;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
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
   /* top: 30px; */
`
const Icon = styled.i`
    font-size: 24px;
     @media screen and (min-width: 768px) {
   font-size: 30px;
    }
`
const OpenSearch = styled.div`
  display: flex;
 flex-direction: row-reverse;
`
const UserInfo = styled.div`
display: flex;
justify-content: right;
background-color: aliceblue;
width: 100%;
max-width: 64rem;
align-items: center;
margin: 0 auto;
`
const Login = styled.button`
height: 1.5rem;
`


const Nav: React.FC = () => {
    const { user, setUser } = useContext(UserContext);
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
        <>
            {/* <UserInfo>
                <pre>{JSON.stringify(user, null, 2)}</pre>
                {user ? (
                    <button
                        onClick={() => {
                            setUser('Sign in again');
                        }}
                    >
                        <NavLink to='/user'>Sign Out</NavLink>

                    </button>
                ) : (
                    <button
                        onClick={async () => {
                            setUser(user);
                        }}
                    ><NavLink to='/user'>Sign Up</NavLink>
                    </button>
                )}
            </UserInfo> */}

            <Header>
                <HeaderSection1>
                    <Logo href="/" />
                </HeaderSection1>
                <HeaderSection2>
                    <Search>
                        <label htmlFor="search">
                            <Input type="text" id="search" name="search" placeholder="Search for  me..." />
                            <SearchIcon><AiOutlineSearch /></SearchIcon>
                        </label>
                    </Search>
                </HeaderSection2>
                <HeaderSection3>
                    <NavWrapper>

                        <OpenSearch>
                            <Icon>
                                <AiOutlineSearch onClick={() => setShowInput(!showInput)} />
                            </Icon>
                            {showInput && (
                                <Input type="text" placeholder="Search for..."></Input>
                            )}
                        </OpenSearch>


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
                            <MenuItem onClick={handleClose}><NavLink to='/user'>User</NavLink></MenuItem>
                            <MenuItem onClick={handleClose}><NavLink to='/wish-list'>Wishlist</NavLink></MenuItem>
                            <MenuItem onClick={handleClose}><NavLink to='/cart'>Cart</NavLink></MenuItem>
                        </Menu>

                    </NavWrapper>
                    <NavWrapperTablet>
                        <NavLink to='/user'>
                            <Icon><AiOutlineUser /></Icon>
                        </NavLink>
                        <NavLink to='/wish-list'>
                            <Icon><AiOutlineHeart /></Icon>
                        </NavLink>
                        <NavLink to='/cart'>
                            <Icon><AiOutlineShoppingCart /></Icon>
                        </NavLink>
                    </NavWrapperTablet>
                </HeaderSection3>

            </Header></>

    )
}

export default Nav