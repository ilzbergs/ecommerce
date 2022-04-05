import { Link } from "react-router-dom"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const NavBar = styled.header`
    position: absolute;
    width: 100%;
    height: 4rem;
    top:0;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
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

`


const Nav: React.FC = () => {
    return (
        <NavBar>
            <Logo href="/" />
            <NavWrapper>
                <NavLink to="/">
                    <FontAwesomeIcon icon={faSearch} ></FontAwesomeIcon>
                </NavLink>
                <NavLink to="/">
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </NavLink>

            </NavWrapper>


        </NavBar>
    )
}

export default Nav