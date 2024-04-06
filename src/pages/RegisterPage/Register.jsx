import RegistrationForm from "../../components/RegistrationForm/RegistrationForm"
import { Link } from "react-router-dom";
import css from "./Register.module.css"

const RegisterPage = ()=> {
    return(<>
    <p className={css.title}>Please, Sign Up!</p>
    <RegistrationForm/>
    <p className={css.text}>
    Already have an account?  <Link className={css.btn} to="/login">Log In</Link>
      </p>
    </>)
}

export default RegisterPage;