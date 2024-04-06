import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css"

const UserMenu = ()=>{
   const dispatch = useDispatch();
   const userName = useSelector(selectUser)

   const firstUserLetter = userName.name.charAt(0).toUpperCase();

   const handleLogout = () => {
      dispatch(logOut())}
return(   <div className={css.userMenu}>
    <div className={css.avatar}>{firstUserLetter}</div>
<p className={css.userName}> Welcome, {userName.name}!</p>
<button className={css.btn} onClick={handleLogout}>Logout</button>
   </div>)
}

export default UserMenu;