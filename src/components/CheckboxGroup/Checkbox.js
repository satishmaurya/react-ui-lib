import React from "react";
import { StyledCheckbox } from './Checkbox.styled';

const Checkbox = (props) => {
  const { label, disabled, error, onClick, id, name, value  } = props;
  return (
    <StyledCheckbox {...props}>
    <label class="checklabel">{label} 
      <input type="checkbox"  id={id} name={name} value={value} disabled={disabled} {...props} />
      <span class="checkmark"></span>
    </label>
    </StyledCheckbox>
     
  )
}

export default Checkbox;
 