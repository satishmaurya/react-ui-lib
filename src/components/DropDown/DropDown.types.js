import React from "react";
import PropTypes from "prop-types";

const DropDownTypes= () => <>DropDownTypes</>;

DropDownTypes.propTypes={
    
    id:PropTypes.string,
    className:PropTypes.string,
    options:PropTypes.arrayOf(PropTypes.shape({ }) ),
    btnType: PropTypes.oneOf(['primary','secondary','success','info','warning','danger','purple','light','dark']),
    btnVariant: PropTypes.oneOf(['contained', 'outlined']),
    isDisabled: PropTypes.bool,
    rounded:PropTypes.oneOf(['rounded','default']),
    size:PropTypes.oneOf(['sm','md','lg']),
    block:PropTypes.bool,
    Iconsize:PropTypes.oneOf(['sm', 'md', 'lg']),
};

DropDownTypes.defaultProps = {
    btnType: 'default',
    btnVariant: 'contained',
    isDisabled: false,
    rounded:'default',
    size:'md',
    block:false,
    Iconsize:'md',
    id:'string',
    className:'string',
    options:'ArrayOf(object)'
};

export default DropDownTypes;