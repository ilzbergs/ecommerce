import { Field, Form, Formik } from "formik";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../UserContext";
import ContentContainer from "../ContentContainer/ContentContainer";
import Footer from "../Footer/Footer";

const LoginWrapper = styled(Form)`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
justify-content: center;
height: 80vh;
`

const StyledField = styled(Field)`
width: 20rem;
height: 2rem;
border-radius: 10px;
border: 1px solid #112D4E;
margin: 1rem;
`
const Btn = styled.button`
background-color: #112D4E;
width: 10rem;
height: 2rem;
color: white;
text-transform: uppercase;
`

const LoginForm: React.FC = () => {
    const { setUser } = useContext(UserContext);

    const submitHandler = (values: { email: string; password: string }) => {
        console.log(values);
        setUser(values.email);
    };

    return (
        <>
            <ContentContainer>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    onSubmit={(values, { resetForm }) => {
                        submitHandler(values)
                        resetForm()
                    }}
                >
                    <LoginWrapper>
                        <StyledField type="email" id="email" name="email" placeholder="Email" />
                        <StyledField type="password" id="password" name="password" placeholder="Password" />
                        <Btn type="submit">Login</Btn>
                        <p>Don't have account... <Link onClick={() => { }} to={`/sign-up`}>Register Here!</Link></p>
                    </LoginWrapper>
                </Formik>
            </ContentContainer>
            <Footer />
        </>
    );
};

export default LoginForm;
