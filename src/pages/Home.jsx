import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Link } from "react-router-dom";


const HomePage = ()=> {
const isLoggedIn = useSelector(selectIsLoggedIn)

    return( <>
    <p>Welcome!</p>

{isLoggedIn ? <Link to="/contacts">Try it now!</Link> :  <Link to="/login">Try it now!</Link>}
   
    
    </>)
}

export default HomePage;