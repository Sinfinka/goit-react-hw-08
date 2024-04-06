// import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import Footer from "../Footer/Footer";
import css from "./Layout.module.css"


const Layout = ({ children })=>{
    return(  
    <div className={css.container}>
    <AppBar/>
    {children}
    <Footer/>
    </div>  
    );}

export default Layout;


// const Layout = ()=>{
//     return(  
//     <>
//     <AppBar/>
//     <Outlet/>
//     <Footer/>
//     </>  
//     );}

// export default Layout;