import React from "react";
import StyledNavBar from "./NavBar.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const NavBar = (props) =>{
    const {btnType, isDisabled, bg, rounded, children, size, block, icon,iconVariant, onClick} = props;
    return(
        <StyledNavBar bg={bg} color={btnType} disabled={isDisabled} {...props}>
            {children}
        </StyledNavBar>
    );
};

export const NavBarChild = StyledNavBar;
// export default NavBar;