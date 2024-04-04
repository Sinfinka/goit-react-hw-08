import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";
import { selectFilteredContacts } from "../../redux/filters/selectors";


export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => {
        return (
          <li className={css.contactItem} key={contact.id}>
           <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
}
