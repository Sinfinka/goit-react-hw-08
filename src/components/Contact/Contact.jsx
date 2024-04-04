import { deleteContact } from "../../redux/contacts/operations";
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

   const handleSave = ()=>{
 console.log("Saved");
   }

   const firstLetter = contact.name.charAt(0).toUpperCase(); 
 
  return (
    <>
    <div className={css.avatar}>{firstLetter}</div>

    {isEditing ?<input type="text"/> :<div className={css.wrapper}>
      <HiUser />
      <div> {contact.name} </div>
    </div> }

    {isEditing ?<input type="text"/> :<div className={css.wrapper}>
      <FaPhoneAlt />
      <div> {contact.number} </div>
    </div> }
    {isEditing ? <DoneIcon onClick={handleSave}/>  : <EditIcon onClick={handleEdit}/>} <CloseIcon onClick={handleClose}/>
      
    <button className={css.btn} onClick={handleDelete}>
      Delete
    </button>

  
    </>
  );
}
