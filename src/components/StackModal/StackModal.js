import React from "react";
import Modal from 'react-bootstrap/Modal';
import StyledModal from './StackModal.styled';
import Button from '../Button';

const StackModal = (props) => {
  const { sanckBarText, snackBarHeading, success, error, } = props;
  return (
    // <StyledToast> SnackBar Styled Toast </StyledToast>
    <StyledModal> 
      <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Modal Component</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {sanckBarText}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
    </StyledModal>
  );
}

export default StackModal; 