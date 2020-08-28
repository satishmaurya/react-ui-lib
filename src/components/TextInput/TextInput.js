import React from "react";
import { StyledTextInput } from './TextInput.styled';
import InputGroup from 'react-bootstrap/InputGroup'
// import

const TextInput = (props) => {
  const { label, disabled, error, onClick, hint, placeholder, value, name  } = props;
  return (
    <StyledTextInput {...props}>
      {/* <label>{label}
  <input class="form-control" type="text" name={name} value={value}
    disabled={disabled} error={error} {...props} /> */}
    {/* <
  { hint && (
    <span>{hint} </span>
  )

  } */}
{/* </label> */}
</StyledTextInput>
     
  )
}

export default TextInput;
 