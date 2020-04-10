import React from "react";
import StyledDropDown from "./DropDown.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const DropDown = (props) =>{
    const {fixed, isDisabled, btnVariant, rounded, children, size, block, icon,iconVariant} = props;
    return(
        <StyledDropDown size={size} {...props}>
           <StyledDropDown.Toggle variant="primary" id="dropdown-basic" size="sm">
            Dropdown Button
            </StyledDropDown.Toggle>
            <StyledDropDown.Menu>
                <StyledDropDown.Item href="#/action-1">Action</StyledDropDown.Item>
                <StyledDropDown.Item href="#/action-2">Another action</StyledDropDown.Item>
                <StyledDropDown.Item href="#/action-3">Something else</StyledDropDown.Item>
            </StyledDropDown.Menu>
        </StyledDropDown>
    );
}

export default DropDown;