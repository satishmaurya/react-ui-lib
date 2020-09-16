import React from "react";
import StyledEvent from './EventGroup.styled';

const EventGroup = (props) => {
  const { label, disabled, error, onClick, id, name, value  } = props;
  return (
    <StyledEvent {...props}>
    hello
    </StyledEvent>
     
  )
}

export default EventGroup;
 