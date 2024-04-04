import RegistrationForm from "../components/RegistrationForm/RegistrationForm"
import { Link } from "react-router-dom";

const RegisterPage = ()=> {
    return(<>
    <p>Please, register!</p>
    <RegistrationForm/>
    <p>
    Already have an account?  <Link to="/login">Sign in.</Link>
      </p>
    </>)
}

export default RegisterPage;