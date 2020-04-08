import React from "react";
import PropTypes from "prop-types";

const ButtonTypes= () => <>Button</>;

ButtonTypes.propTypes={
    btnType: PropTypes.oneOf(['primary','secondary','success','info','warning','danger','purple','light','dark']),
    isDisabled: PropTypes.bool,
    rounded:PropTypes.oneOf(['rounded','default']),
    size:PropTypes.oneOf(['xs','sm','md','lg']),
};

ButtonTypes.defaultProps = {
    btnType: 'default',
    isDisabled: false,
    rounded:'default',
    size:'default',
};

export default ButtonTypes;