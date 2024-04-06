import {  NavLink, } from "react-router-dom"; 
import clsx from "clsx";
import css from "./AuthNav.module.css";


const addActiveClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

const AuthNav = ()=>{
return(   <div className={css.logreg}>
    <NavLink className={addActiveClass} to="/login">
      Log In
    </NavLink>
   
   <NavLink className={addActiveClass} to="/register">
      Sign Up
    </NavLink>
   </div>)
}

export default AuthNav;