import React from "react";
import PropTypes from "prop-types";

const ButtonTypes= () => <>Button</>;

ButtonTypes.propTypes={
    btnType: PropTypes.oneOf(['primary','secondary','success','info','warning','danger','purple','light','dark']),
    btnVariant: PropTypes.oneOf(['contained', 'outlined']),
    isDisabled: PropTypes.bool,
};

ButtonTypes.defaultProps = {
    btnType: 'default',
    btnVariant: 'contained',
    isDisabled: false
};

export default ButtonTypes;