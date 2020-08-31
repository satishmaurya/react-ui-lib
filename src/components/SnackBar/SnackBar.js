import React from "react";
import { StyledToast } from './SnackBar.styled';
import Toast from 'react-bootstrap/Toast'

const SnackBar = (props) => {
  const { sanckBarText, snackBarHeading, success, error, } = props;
  return (
    // <StyledToast> SnackBar Styled Toast </StyledToast>
    <StyledToast {...props}>
      <Toast>
        <Toast.Header>
          <strong className="mr-auto">{snackBarHeading}</strong>
        </Toast.Header>
        <Toast.Body>{sanckBarText}</Toast.Body>
      </Toast>
    </StyledToast>
  );
}

export default SnackBar; 