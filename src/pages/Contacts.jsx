import { useDispatch } from "react-redux";
import ContactForm from "../components/contactForm/ContactForm";
import ContactList from "../components/contactList/ContactList";
import SearchBox from "../components/searchBox/SearchBox";
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