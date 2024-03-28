import { Link, NavLink, } from "react-router-dom"; 
import clsx from "clsx";
import css from "./AppBar.module.css";
import { BsCircleSquare } from "react-icons/bs";
// import { useSelector } from "react-redux";
// import   {selectIsLoggedIn} from '../../redux/auth/selectors'


const addActiveClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const AppBar = () => {

  // const isLoggedIn =  useSelector(selectIsLoggedIn)
  
  return (
    <header className={css.header}>
      <div>
        <Link to="/" className={css.logo}>
         <BsCircleSquare  /> <span>PHONE</span> BOOK
        </Link>
      </div>
      <nav className={css.nav}>

        <NavLink className={addActiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={addActiveClass} to="/contacts">
          Contacts
        </NavLink>
        <NavLink className={addActiveClass} to="/login">
          Login
        </NavLink>
        <NavLink className={addActiveClass} to="/register">
          Register
        </NavLink>
      </nav>
    </header>
  );
};

export default AppBar;
