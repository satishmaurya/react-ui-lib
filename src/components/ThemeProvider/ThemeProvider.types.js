import React from "react";
import PropTypes from "prop-types";

const ButtonTypes= () => <>Button</>;

ButtonTypes.propTypes={
    btnType: PropTypes.oneOf(['default','primary','secondary']),
    btnVariant: PropTypes.oneOf(['contained', 'outlined']),
    isDisabled: PropTypes.bool,
};

ButtonTypes.defaultProps = {
    btnType: 'default',
    btnVariant: 'contained',
    isDisabled: false
};

export default ButtonTypes;