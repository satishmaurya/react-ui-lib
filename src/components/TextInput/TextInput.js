import React from "react";
import { StyledTextInput } from './TextInput.styled';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

// import

const TextInput = (props) => {
  const { label, disabled, error, onClick, hint, placeholder, value, name, size,
  bsPrefix, rows, as  } = props;
  return (
    <StyledTextInput {...props}>
       <Form.Label>{label}</Form.Label> 
                      <Form.Control as={as} rows={rows} bsPrefix={bsPrefix} size={size} {...props} /> 
  
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
 