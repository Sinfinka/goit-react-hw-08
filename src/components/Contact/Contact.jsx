import {  editContact } from "../../redux/contacts/operations";
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
  // const [contactId, setContactId] = useState(contact.id);
 
  const handleOpenModal = () => {
    setModalIsOpen(true)
  };


  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleEdit = ()=>{
   setIsEditing(true)
  }

  const handleClose = ()=>{
    setIsEditing(false)
   }

   const handleSave = () => {
      const updatedContact = {
      name: name,
      number: number
    };
    dispatch(editContact({ contactId: contact.id , updatedContact }));
    setIsEditing(false);
  };

   const handleSetName = (e) => {
    setName(e.target.value)
  }

  const handleSetNumber = (e) => {
    setNumber(e.target.value)
  };


   const firstLetter = contact.name.charAt(0).toUpperCase(); 
 
  return (
    <>
    <div className={css.avatar}>{firstLetter}</div>

    {isEditing ?<input type="text" value={name} onChange={handleSetName}/> :<div className={css.wrapper}>
      <HiUser />
      <div> {contact.name} </div>
    </div> }

    {isEditing ?
      <input type="text" value={number} onChange={handleSetNumber}/> :
      <div className={css.wrapper}>
        <FaPhoneAlt />
        <div> {contact.number} </div>
      </div>
    }
    {isEditing ? <DoneIcon onClick={handleSave}/>  : <EditIcon onClick={handleEdit}/>} <CloseIcon onClick={handleClose}/>
      
    <button className={css.btn} onClick={handleOpenModal}>
      Delete
    </button>

    <DeleteModal contact={contact} modalIsOpen={modalIsOpen} onCloseModal={handleCloseModal} />
    </>
  );
}


