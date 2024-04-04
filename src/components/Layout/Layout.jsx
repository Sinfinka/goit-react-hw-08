// import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import Footer from "../Footer/Footer";


const Layout = ({ children })=>{
    return(  
    <>
    <AppBar/>
    {children}
    <Footer/>
    </>  
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