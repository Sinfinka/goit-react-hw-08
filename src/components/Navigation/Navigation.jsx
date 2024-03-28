import {  NavLink } from "react-router-dom"; 
import { useSelector } from "react-redux";
import   {selectIsLoggedIn} from '../../redux/auth/selectors'
import clsx from "clsx";
import css from "./Navigation.module.css";



const addActiveClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  
const Navigation = ()=>{
    const isLoggedIn =  useSelector(selectIsLoggedIn);
    return(<>
        <NavLink className={addActiveClass} to="/">
        Home
        </NavLink>

{isLoggedIn && <NavLink className={addActiveClass} to="/contacts">
        Contacts
        </NavLink>}
       
    
        </>
    )
    
}

export default Navigation;