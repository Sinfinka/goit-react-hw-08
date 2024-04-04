import { deleteContact, editContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaPhoneAlt } from "react-icons/fa";
import { HiUser } from "react-icons/hi";
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import css from "./Contact.module.css";




export default function Contact({ contact }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  // const [contactId, setContactId] = useState(contact.id);

 

  const handleDelete = () => {
    dispatch(deleteContact(contact.id)).unwrap()
    .then((value) => {
      toast.success(`Contact ${value.name} was deleted`);
    })
    .catch((value) => {
      toast.error(`Contact ${value.name} was not deleted`);
    });
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
      
    <button className={css.btn} onClick={handleDelete}>
      Delete
    </button>

  
    </>
  );
}
