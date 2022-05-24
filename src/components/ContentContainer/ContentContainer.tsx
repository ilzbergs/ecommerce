import styled from "styled-components"


const Container = styled.div`
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column; 
    align-items: center;
    margin-bottom: 2rem;
    background-color: #faf9f9;
    padding-bottom: 100px;
`

const ContentContainer: React.FC = ({ children }) => {
    return <Container>{children}</Container>
}

export default ContentContainer
