import React from "react";
import PropTypes from "prop-types";

const IconTypes= () => <>IconTypes</>;

IconTypes.propTypes={
    isDisabled: PropTypes.bool,
    rounded:PropTypes.oneOf(['rounded','default']),
    size:PropTypes.oneOf(['sm','md','lg']),
    block:PropTypes.bool,
    children:PropTypes.node,
    name:PropTypes.string,
    onClick:PropTypes.func,
    color: PropTypes.string,
    bg:PropTypes.string,
    animation:PropTypes.bool,
    rotation:PropTypes.bool,
    iconVariant:PropTypes.oneOf(['regular','solid']),
};

IconTypes.defaultProps = {
    isDisabled: false,
    rounded:'default',
    size:'md',
    block:false
};

export default IconTypes;