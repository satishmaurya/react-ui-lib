import React from "react";
import PropTypes from "prop-types";

const CardTypes= () => <>StackCard</>;

CardTypes.propTypes={
    cardTitle: PropTypes.string,
    bgColor: PropTypes.oneOf(['white', 'primary','secondary','success','info','warning','danger']),
    isDisabled: PropTypes.bool,
    rounded:PropTypes.oneOf(['rounded','default'])
};

CardTypes.defaultProps = {
    cardTitle: ' ',
    bgColor: 'white',
    isDisabled: false,
    rounded:'default',
};

export default CardTypes;