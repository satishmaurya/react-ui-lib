import React from "react";
import StyledHeader from "./Header.styled";

const Header = (props) =>{
    const {background, fixed, children} = props;
    return(
        <StyledHeader fixed={fixed} background={background}>
            {children}
        </StyledHeader>
    );
}

export default Header;