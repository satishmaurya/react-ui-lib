import React from "react";
import PropTypes from "prop-types";

const DropDownTypes= () => <>DropDownTypes</>;

DropDownTypes.propTypes={
    btnType: PropTypes.oneOf(['primary','secondary','success','info','warning','danger','purple','light','dark']),
    btnVariant: PropTypes.oneOf(['contained', 'outlined']),
    isDisabled: PropTypes.bool,
    rounded:PropTypes.oneOf(['rounded','default']),
    size:PropTypes.oneOf(['sm','md','lg']),
    block:PropTypes.bool
};

DropDownTypes.defaultProps = {
    btnType: 'default',
    btnVariant: 'contained',
    isDisabled: false,
    rounded:'default',
    size:'md',
    block:false
};

export default DropDownTypes;