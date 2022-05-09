
import LoginForm from "../components/Login/LoginForm"
import SignUpForm from "../components/SignUp/SignUpForm"

const User: React.FC<{login?:boolean}> = ({login}) => {
   if (login) return <SignUpForm/>
   return <LoginForm/>
}
export default User