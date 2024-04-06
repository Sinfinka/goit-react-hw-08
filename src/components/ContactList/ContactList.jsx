import { useSelector } from "react-redux";
import { useState } from "react";
import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import Pagination from "../Pagination/Pagination"

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 6;

  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log(currentPage);

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


