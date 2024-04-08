import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm"
import css from "./Login.module.css"



const LoginPage = ()=> {
    return(<>
    <p className={css.title}>Please Log in!</p>
    <LoginForm/>
    <p className={css.text}>
    Don&apos;t have an account yet?  <Link className={css.btn} to="/register">Sign Up</Link>
      </p>
    </> )
    
}

export default LoginPage;