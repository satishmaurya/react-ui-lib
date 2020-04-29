import React from "react";
import ThemeProviderStyle from "./ThemeProvider.styled";

const ThemeProvider = props => {
  const {
    light,
    children
  } = props;
  return React.createElement(ThemeProviderStyle, {
    theme: light
  }, children);
};

export default ThemeProvider;