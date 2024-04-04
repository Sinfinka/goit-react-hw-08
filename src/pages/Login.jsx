import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm"



const LoginPage = ()=> {
    return(<>
    <p>Please Log in!</p>
    <LoginForm/>
    <p>
    Don&apos;t have an account yet?  <Link to="/register">Register now.</Link>
      </p>
    </> )
    
}

export default LoginPage;