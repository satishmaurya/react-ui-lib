import React from "react";
import PropTypes from "prop-types";

const CardTypes= () => <>StackCard</>;

CardTypes.propTypes={
    btnType: PropTypes.oneOf(['primary','secondary','success','info','warning','danger','purple','light','dark']),
    btnVariant: PropTypes.oneOf(['contained', 'outlined']),
    isDisabled: PropTypes.bool,
    rounded:PropTypes.oneOf(['rounded','default'])
};

CardTypes.defaultProps = {
    btnType: 'default',
    btnVariant: 'contained',
    isDisabled: false,
    rounded:'default',
};

export default CardTypes;