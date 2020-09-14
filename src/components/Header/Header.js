import React from "react";
import StyledHeader from "./Header.styled";

const Header = (props) =>{
    const {mode, fixed, children} = props;
    return(
        <StyledHeader mode={mode} fixed={fixed}>
            {children}
        </StyledHeader>
    );
}

export default Header;