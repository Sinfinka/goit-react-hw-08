import { Link } from "react-router-dom"; 
import css from "./AppBar.module.css";
// import { BsCircleSquare } from "react-icons/bs";
import { useSelector } from "react-redux";
import   {selectIsLoggedIn, selectIsRefreshing} from '../../redux/auth/selectors'
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import AnimatedIcon from "../AnimatedIcon/AnimatedIcon";

const AppBar = () => {
  const isLoggedIn =  useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <header className={css.header}>
      <div className={css.logo}>
        <Link to="/" className={css.logo}>
         <AnimatedIcon/> <span>PHONE</span> BOOK
        </Link>
      </div>
      <nav className={css.nav}>
        <Navigation/>  
        {!isRefreshing && <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>}     
      </nav>
    </header>
  );
};

export default AppBar;
