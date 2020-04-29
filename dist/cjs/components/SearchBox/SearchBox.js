import React from "react";
import { StyledSearchBox, StyledForm } from "./SearchBox.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBox = props => {
  const {
    btnType,
    isDisabled,
    placeholder,
    children,
    size,
    bg,
    borderRadius
  } = props;
  return React.createElement(StyledForm, {
    inline: true
  }, React.createElement(StyledSearchBox, {
    borderRadius: borderRadius,
    bg: bg,
    size: size,
    type: "text",
    placeholder: placeholder
  }), children);
};

export default SearchBox;