import React from "react";
import { StyledRadio } from './Radio.styled';


const Radio = (props) => {
  const { label, disabled, error, onClick, value, name  } = props;
  return (
    <StyledRadio {...props}>
      <label class="radio-btn">{label}
        <input type="radio" name={name} disabled={disabled} error={error} />
        <span class="radio-check"></span>
      </label>
    </StyledRadio>
     
  )
}

export default Radio;
 