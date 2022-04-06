import styled from "styled-components"


const Container = styled.div`
    width: 100%;
    max-width: 64rem;
    padding-top: 5rem;
    display: flex;
    flex-flow: row wrap;
    justify-content:center;
    align-items: center;
    margin-bottom: 2rem;
    background-color: #faf9f9;
`

const ContentContainer: React.FC = ({ children }) => {
    return <Container>{children}</Container>
}

export default ContentContainer
