// import { useEffect } from "react";

import css from "./App.module.css";
import {  useSelector } from "react-redux"; //useDispatch,
// import { fetchContacts } from "../../redux/contacts/operations";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import{ Toaster } from "react-hot-toast"; // toast,  snaryji
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../../pages/NotFoundPage";
import Navigation from "../AppBar/AppBar";
import Footer from "../Footer/Footer";
import RegisterPage from "../../pages/Register";
import LoginPage from "../../pages/Login";
import HomePage from "../../pages/Home";
import ContactsPage from "../../pages/Contacts";


function App() {
  // const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts())
  //     .unwrap()
  //     .catch(() => {
  //       toast.error("Fetch rejected");
  //     });
  // }, [dispatch]);

  return (
    <div className={css.container}>
      <Navigation/>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/register" element={<RegisterPage/>}/>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/contacts" element={<ContactsPage/>}/>
              <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
         <div className={css.contacts}>
        {loading && !error && <Loader />}
        {error && <ErrorMessage />}
        <Toaster />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
