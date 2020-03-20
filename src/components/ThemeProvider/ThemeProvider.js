import React from "react";
import ThemeProviderStyle from "./ThemeProvider.styled";

const ThemeProvider = (props) =>{
    const {light, children} = props;
    return(
        <ThemeProviderStyle theme={light}>{children}</ThemeProviderStyle>
    );
}

export default ThemeProvider;