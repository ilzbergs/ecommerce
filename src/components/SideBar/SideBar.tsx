import styled from "styled-components"


const Sidebar = styled.aside`
display: none;
`

const SideBar: React.FC = () => {
   return(
       <Sidebar>This is sidebar</Sidebar>
   )
}

export default SideBar