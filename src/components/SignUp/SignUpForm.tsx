
import { Field, Form, Formik } from "formik";
// import * as yup from "yup";
import ContentContainer from "../ContentContainer/ContentContainer";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
// const validationSchema = yup.object().shape({
//     firstName: yup.string().required('Please Enter your name'),
//     lastName: yup.string().required('Please Enter your last name'),
//     email: yup.string().required('Please Enter your email').email(),
//     confirmEmail: yup.string().required('Please verify email').email(),
//     password: yup.string().required('Please Enter your password'),
//     confirmPassword: yup.string().required('Confirm password').matches(/^.(?=.{8,}).$/,
//         "Password must contain at least 8 characters")
//         .oneOf([yup.ref('password'), null], 'Passwords must match'),
// });


const SignUpForm: React.FC = () => {
    const submitHandler = (values: {
        firstName: string;
        lastName: string;
        email: string;
        confirmEmail: string;
        password: string;
        confirmPassword: string;
    }) => {
        console.log(values);
    };
    return (
        <ContentContainer>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    confirmEmail: '',
                    password: '',
                    confirmPassword: '',
                }}
                onSubmit={(values, { resetForm }) => {
                    submitHandler(values)
                    resetForm()
                }}
            // validationSchema={validationSchema}             
            >
                <LoginWrapper>
                    <StyledField type="text" id="firstName" name="firstName" placeholder="Enter yor name" />
                    <StyledField type="text" id="lastName" name="lastName" placeholder="Enter your last name" />
                    <StyledField type="email" id="email" name="email" value="" placeholder="Enter email" />
                    <StyledField type="email" id="confEmail" name="confEmail" placeholder="Confirm email" />
                    <StyledField type="password" id="password" name="pasword" placeholder="Enter password" />
                    <StyledField type="password" id="confPassword" name="confPassword" placeholder="Confirm password" />
                    <Btn type="submit">Submit</Btn>
                    <p>Already have account? <Link onClick={() => { }} to={`/login`}>Sign up!</Link></p>
                </LoginWrapper>
            </Formik>
        </ContentContainer>
    )
}

export default SignUpForm;