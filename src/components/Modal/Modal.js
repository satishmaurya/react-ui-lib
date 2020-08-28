import React from "react";
import { StyledModal } from './Modal.styled';
import Modal from 'react-bootstrap/Modal';

const StackModal = (props) => {
  const { sanckBarText, snackBarHeading, success, error, } = props;
  return (
    // <StyledToast> SnackBar Styled Toast </StyledToast>
    <StyledModal {...props}> 
      <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{sanckBarText}</p>
      </Modal.Body>

      {/* <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer> */}
    </Modal.Dialog>
    </StyledModal>
  );
}

export default StackModal; 