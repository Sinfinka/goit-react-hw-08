import { useDispatch } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";



const ContactsPage = ()=> {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchContacts());
    }, []);

    return( <>
    <SearchBox/>
    <ContactForm/>
    <ContactList/>

  
    </>)
}

export default ContactsPage;