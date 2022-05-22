import { validateYupSchema } from "formik"
import { Link, NavLink } from "react-router-dom"
import styled from "styled-components"
import Post from "../../Interfaces"

const StyledCard = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  padding: 3rem;
  color: #112D4E;
  margin-bottom: 3rem;
cursor: pointer;
  text-decoration: none;
    &:visited {
        color: #112D4E;
    }
 transition: all 250ms ease-in-out;
  &:hover {
    transform: translateY(-3px);
  }
@media screen and (min-width: 426px) {
  width: 255px;
  height: 125px;
}
@media screen and (min-width: 1024px) {
 width: 205px;
  height: 170px;
}
`
const Image = styled.img`
  width: 150px;
  height: 150px;
  transition: all 0.3s ease;
`

const Wrapper = styled.div`
width: 100%;
`

const Title = styled.div`
  font-weight:bold;
  font-size: 12px;
`

const Card: React.FC<{ data: Post }> = ({ data }) => {
  const { id, image, title} = data;
  return (
    <>
      <StyledCard onClick={(): void => { }} to={`/product/${id}`}>
        <Image src={image} alt={''} />
        <Wrapper>
          <Title>{title}</Title>
        </Wrapper>
      </StyledCard>

    </>


  )
}

export default Card