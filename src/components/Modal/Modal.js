import React from "react";
import {StyledModal} from "./Modal.styled";
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import Button from '../Button/Button';

const StackModal = (props) =>{
    const {
        children, modalText, size, show, scrollable, onShow, onHide, centered, animation,
        saveText, modalTitle
    } = props;
    return(
        <StyledModal size={size} show={show} scrollable={scrollable} {...props}>
            {/* {children} */}
            <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>{modalText}</Modal.Title>
  </Modal.Header>

  <Modal.Body>
   {children}
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">{modalText}</Button>
    <Button variant="primary">{modalText}</Button>
  </Modal.Footer>
</Modal.Dialog>
        </StyledModal>
    );
}

export default StackModal;