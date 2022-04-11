import { Link } from "react-router-dom"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import React, { useRef } from 'react';
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { Button, Menu, MenuItem } from "@mui/material"



const NavBar = styled.header`
    position: absolute;
    width: 100%;
    max-width: 64rem;
    height: 4rem;
    top:0;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    background-color: aliceblue;
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
    min-width: 4rem;
    padding: 0 10px;
    text-decoration: none;
    &:visited {
        color: #112D4E;
    }
`
const NavWrapper = styled.div`
  
    @media screen and (min-width: 480px) {
    display: none;
}
`
const NavWrapperTablet = styled.div`
    margin-right: 1rem;
    @media screen and (max-width: 479px) {
    display: none;
}
`

const Input = styled.input`
    position: absolute;
    right: 7rem;
    top: 1.15rem;
    border: 1px solid;
    border-radius: 5px;
    width: 150px;
    height: 1.5rem;
    border: 0;
    z-index: 1;
    box-shadow:0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 10px 2px rgb(0 0 0 / 12%);
     @media screen and (min-width: 480px) {
    right:14rem;
    box-shadow: none;
}
`

const Search = styled.div`
position: absolute;
top: 1.5rem;
right: 14.5rem;
z-index: 1;
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
        <NavBar>
            <Logo href="/" />
            <NavWrapper>
              
                <NavLink to="">
                    <FontAwesomeIcon icon={faSearch}  onClick={() => setShowInput(!showInput)}></FontAwesomeIcon>
                    {showInput && (
                        <Input type="text" placeholder="Search for..."></Input>
                    )}
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
                        <FontAwesomeIcon icon={faBars} fontSize='20' color="#112D4E"></FontAwesomeIcon>
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
                <Input type="text" placeholder="Search for..." name="searchInput" id="searchInput" autoComplete="off" />
                <NavLink to=''>
                      <Search>
                    <FontAwesomeIcon icon={faSearch} color="#112D4E"></FontAwesomeIcon>
                </Search>
                </NavLink>              
                <NavLink to=''>
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </NavLink>
                <NavLink to=''>
                    <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                </NavLink>
                <NavLink to=''>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </NavLink>
            </NavWrapperTablet>



        </NavBar>
    )
}

export default Nav