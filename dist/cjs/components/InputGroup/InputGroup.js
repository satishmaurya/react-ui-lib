function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import StyledInputGroup from "./InputGroup.styled";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const StackInputGroup = props => {
  const {
    type,
    as,
    rows,
    bsPrefix,
    disabled,
    value,
    rounded,
    children,
    size,
    labelBg,
    icon,
    placeholder,
    id,
    labelText,
    labelInline
  } = props;
  return React.createElement(StyledInputGroup, null, labelInline ? React.createElement(InputGroup, {
    size: size
  }, React.createElement(InputGroup.Prepend, null, React.createElement(InputGroup.Text, {
    id: id
  }, labelText)), React.createElement(Form.Control, _extends({
    as: as,
    rows: rows,
    bsPrefix: bsPrefix,
    size: size
  }, props))) : React.createElement(React.Fragment, null, React.createElement(Form.Label, null, labelText), " ", React.createElement(Form.Control, _extends({
    as: as,
    rows: rows,
    bsPrefix: bsPrefix,
    size: size
  }, props)), " "));
};

export default StackInputGroup;