import {  NavLink, } from "react-router-dom"; 
import clsx from "clsx";
import css from "./AuthNav.module.css";


const addActiveClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

const AuthNav = ()=>{
return(   <div>
    <NavLink className={addActiveClass} to="/login">
      Login
    </NavLink>
   
   <NavLink className={addActiveClass} to="/register">
      Register
    </NavLink>
   </div>)
}

export default AuthNav;