import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Pagination from "../Pagination/Pagination"

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const [currentPage, setCurrentPage] = useState(1);
  const [contactsPerPage, setContactsPerPage] = useState(6);


  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 720) {
        setContactsPerPage(6);
      } else {
        setContactsPerPage(12);
      }
    }
  
    handleResize();
    window.addEventListener("resize", handleResize);
  
    return () => window.removeEventListener("resize", handleResize);
  }, [setContactsPerPage]);

  return (
    
    <div>
      <ul className={css.contactList}>
        {currentContacts.map((contact) => (
          <li className={css.contactItem} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
      <Pagination
        contactsPerPage={contactsPerPage}
        totalContacts={contacts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}


