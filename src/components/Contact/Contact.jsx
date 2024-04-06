import { editContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiUser } from "react-icons/hi";
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import css from "./Contact.module.css";
import DeleteModal from "../DeleteModal/DeleteModal";

export default function Contact({ contact }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleClose = () => {
    setIsEditing(false);
    setName(contact.name);
    setNumber(contact.number);
  };

  const handleSave = () => {
    const updatedContact = {
      name: name,
      number: number
    };
    dispatch(editContact({ contactId: contact.id, updatedContact }));
    setIsEditing(false);
  };

  const handleSetName = (e) => {
    if (e.key === "Enter") {
      handleSave();
    } else {
      setName(e.target.value);
    }
  };

  const handleSetNumber = (e) => {
    if (e.key === "Enter") {
      handleSave();
    } else {
      setNumber(e.target.value);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      handleClose();
    }
    if (e.key === "Enter") {
      handleSave();
    }
  };

  const firstLetter = contact.name.charAt(0).toUpperCase();

  return (
    <div  className={css.contactItem}>
      <div className={css.avatar}>{firstLetter}</div>

      {isEditing ? (
        <input
          type="text"
          value={name}
          onChange={handleSetName}
          onKeyDown={handleKeyDown}
          autoFocus 
        />
      ) : (
        <div className={css.wrapper}>
          <HiUser />
          <div> {contact.name} </div>
        </div>
      )}

      {isEditing ? (
        <input
          type="text"
          value={number}
          onChange={handleSetNumber}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSave();
            }
          }}
        />
      ) : (
        <div className={css.wrapper}>
          <FaPhoneAlt />
          <div> {contact.number} </div>
        </div>
      )}

      {isEditing ? (
        <div>
          <DoneIcon onClick={handleSave} />
          <CloseIcon onClick={handleClose} />
        </div>
      ) : (
       <div className={css.editIcon}> <EditIcon  onClick={handleEdit} /></div> 
      )}

      <button className={css.btn} onClick={handleOpenModal}>
        Delete
      </button>

      <DeleteModal
        contact={contact}
        modalIsOpen={modalIsOpen}
        onCloseModal={handleCloseModal}
      />
    </div>
  );
}
