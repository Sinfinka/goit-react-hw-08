import { Link } from "react-router-dom"; 
import css from "./AppBar.module.css";
import { BsCircleSquare } from "react-icons/bs";
import { useSelector } from "react-redux";
import   {selectIsLoggedIn} from '../../redux/auth/selectors'
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

const AppBar = () => {
  const isLoggedIn =  useSelector(selectIsLoggedIn);
  
  return (
    <header className={css.header}>
      <div>
        <Link to="/" className={css.logo}>
         <BsCircleSquare  /> <span>PHONE</span> BOOK
        </Link>
      </div>
      <nav className={css.nav}>
        <Navigation/>       
        {isLoggedIn ? <UserMenu/> :  <AuthNav/> }
      </nav>
    </header>
  );
};

export default AppBar;
