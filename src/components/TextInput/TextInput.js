import React from "react";
import { StyledTextInput } from './TextInput.styled';
// import

const TextInput = (props) => {
  const { label, disabled, error, onClick,  } = props;
  return (
    <StyledTextInput {...props}>
      {/* <label class="radio-btn">{label}
  <input type="radio" name="radio" disabled={disabled} error={error} />
  <span class="radio-check"></span>
</label> */}
</StyledTextInput>
     
  )
}

export default TextInput;
 