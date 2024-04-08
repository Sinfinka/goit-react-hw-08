import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Link } from "react-router-dom";
import css from "./Home.module.css"


const HomePage = ()=> {
const isLoggedIn = useSelector(selectIsLoggedIn)

    return( <>
    <p className={css.title}>Welcome!</p>
    <p className={css.text}>Easily Find and Take Control of Your Contacts</p>


{isLoggedIn ? <Link className={css.btn} to="/contacts">Try it now!</Link> :  <Link className={css.btn} to="/login">Try it now!</Link>}
   
    
    </>)
}

export default HomePage;