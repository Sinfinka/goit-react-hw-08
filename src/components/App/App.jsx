// import AppBar from "../AppBar/AppBar";
// import Footer from "../Footer/Footer";

import Layout from "../Layout/Layout";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { Toaster } from "react-hot-toast"; 
import { Route, Routes } from "react-router-dom";
import RestrictedRoute from "../RestrictedRoute";
import { refreshUser } from "../../redux/auth/operations";
import css from "./App.module.css";
import PrivateRoute from "../PrivateRoute";

const HomePage = lazy(() =>import("../../pages/Home"))
const ContactsPage = lazy(() =>import("../../pages/Contacts"))
const RegisterPage = lazy(() =>import("../../pages/Register"))
const LoginPage = lazy(() =>import("../../pages/Login"))
const NotFoundPage = lazy(() =>import("../../pages/NotFoundPage"))


function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const isRefreshing = useSelector(selectIsRefreshing)

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);

  return( 
  <div className={css.container}>
    <Layout>
   { isRefreshing ? <Loader/> : <div>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/register" element={<RestrictedRoute component={<RegisterPage/>} redirectTo="/contacts"/>} />
        <Route path="/login" element={<RestrictedRoute component={<LoginPage/>} redirectTo="/contacts"/>}/>
        <Route path="/contacts" element={<PrivateRoute component={<ContactsPage/>} redirectTo="/login"/>} />  
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </Suspense>
      {loading && !error && <Loader />}
      {error && !loading && <ErrorMessage />}
      <Toaster />
      </div>}
    </Layout>
  </div>)
    
  
}

export default App;
