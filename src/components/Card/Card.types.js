import React from "react";
import PropTypes from "prop-types";

const CardTypes= () => <>StackCard</>;

CardTypes.propTypes={
    cardTitle: PropTypes.string,
    bgColor: PropTypes.oneOf(['white', 'primary','secondary','success','info','warning','danger']),
    isDisabled: PropTypes.bool,
    rounded:PropTypes.oneOf(['rounded','default']),
    imgPos:PropTypes.oneOf(['top', 'middle', 'bottom']),
    alignText:PropTypes.oneOf(['left', 'center', 'right']),
    border:PropTypes.oneOf(['light', 'dark']),
    imgUrl:PropTypes.string,
    color:PropTypes.string,
    children:PropTypes.node,
    width:PropTypes.string,
    cardMenu: PropTypes.element,


};

CardTypes.defaultProps = {
    cardTitle: ' ',
    bgColor: 'white',
    isDisabled: false,
    rounded:'default',
};

export default CardTypes;