import { useEffect } from "react";
import ContactForm from "../contactForm/ContactForm";
import ContactList from "../contactList/ContactList";
import SearchBox from "../searchBox/SearchBox";
import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectError, selectLoading } from "../../redux/contacts/selectors";

import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import toast, { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../../pages/NotFoundPage";
import Navigation from "../AppBar/AppBar";
import Footer from "../Footer/Footer";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .catch(() => {
        toast.error("Fetch rejected");
      });
  }, [dispatch]);

  return (
    <div className={css.conteiner}>

      <Navigation/>




<Routes>
  <Route path="/" element={<h1>Home Page</h1>}/>
  <Route path="/register" element={<h1>Register Page</h1>}/>
  <Route path="/login" element={<h1>Login Page</h1>}/>
  <Route path="/contacts" element={<h1>Contacts Page</h1>}/>
  <Route path="*" element={<NotFoundPage/>}/>
</Routes>


      <div className={css.header}>
        <h3>Phonebook</h3>
        <ContactForm />
      </div>
      <div className={css.contacts}>
        <SearchBox />
        <ContactList />
        {loading && !error && <Loader />}
        {error && <ErrorMessage />}
        <Toaster />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
