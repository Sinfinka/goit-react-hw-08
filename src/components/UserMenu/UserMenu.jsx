import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

const UserMenu = ()=>{
   const dispatch = useDispatch();
   const userName = useSelector(selectUser)

   const handleLogout = () => {
      dispatch(logOut())}
return(   <div>
<p>Welcome, {userName.name}!</p>
<button onClick={handleLogout}>Logout</button>
   </div>)
}

export default UserMenu;