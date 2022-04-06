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
    text-decoration: none;
    cursor: pointer;
    padding: 20px;
   
    &:visited {
        color: #112D4E;
    }
`
const NavWrapper = styled.div`
    margin-right: 1rem;
    @media screen and (min-width: 480px) {
    display: none;
}
`
const NavWrapperTablet = styled.div`
    margin-right: 1rem;
    @media screen and (max-width: 480px) {
    display: none;
}
`

const Input = styled.input`
    position: absolute;
    z-index: 1;
    top: 1.3rem;
    right: 7rem;
    border: 1px solid;
    border-radius: 5px;
    width: 150px;
     @media screen and (min-width: 480px) {
    right:14rem
}
`
const DropDown = styled.div`
    position: absolute;
    top: 3rem;
    min-width: 6rem;
    height: auto;
    background: #eeeeed;
    z-index: 1;
    line-height: 2rem;
    text-align: left;
    border: 1px solid;
    border-radius: 5px;
    padding: 5px;
`

const Nav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [showInput, setShowInput] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    // useEffect(() => {
    //     const handleClickOutside = (event: { target: any }) => {
    //         if (!ref.current.contains(event.target)) {
    //             setIsOpen(false);
    //         }
    //     };
    //     document.addEventListener("mousedown", handleClickOutside);
    // }, [ref]);


    return (
        <NavBar>
            <Logo href="/" />
            <NavWrapper>
                <NavLink to="">
                    <FontAwesomeIcon icon={faSearch} onClick={() => setShowInput(!showInput)}></FontAwesomeIcon>
                    {showInput && (
                        <Input type="text" placeholder="Search for..."></Input>
                    )}
                </NavLink>
                <NavLink to="">
                    <FontAwesomeIcon icon={faBars} onClick={() => setIsOpen(!isOpen)} ></FontAwesomeIcon>
                    {isOpen && (
                        <DropDown ref={ref}>
                            <div>User</div>
                            <div>Wishlist</div>
                            <div>Shopping Cart</div>
                        </DropDown>
                    )
                    }
                </NavLink>
            </NavWrapper>
            <NavWrapperTablet>
                <NavLink to=''>
                    <Input type="text" placeholder="Search for..." name="searchInput" id="searchInput" autoComplete="off" />
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>                  
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