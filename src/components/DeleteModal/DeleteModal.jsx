import Dialog from '@mui/material/Dialog';
import { deleteContact } from "../../redux/contacts/operations";

import { useDispatch } from 'react-redux';
import toast from "react-hot-toast";
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@mui/material';
import { forwardRef } from 'react';
import css from './DeleteModal.module.css'

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function DeleteModal({contact, modalIsOpen, onCloseModal}) {
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteContact(contact.id)).unwrap()
     .then((value) => {
       toast.success(`Contact ${value.name} was deleted`);
     })
     .catch((value) => {
       toast.error(`Contact ${value.name} was not deleted`);
     });
   };
    
return(<>

    <Dialog 
      open={modalIsOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={onCloseModal}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle className={css.title}>{`Delete contact ${contact.name}`}</DialogTitle>
      <DialogContent className={css.text}>
        <DialogContentText id="alert-dialog-slide-description">
        Do you really want to delete this contact from your contact list?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button className={css.btn} onClick={handleDelete}>Delete</Button>
        <Button className={css.btn} onClick={onCloseModal}>Cancel</Button>
      </DialogActions>
    </Dialog>
  </>
);
}