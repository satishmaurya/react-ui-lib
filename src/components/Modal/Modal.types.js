import React from "react";
import PropTypes from "prop-types";

const ModalTypes= () => <>Modal</>;

ModalTypes.propTypes={
    size: PropTypes.oneOf(['sm','md','lg']),
    show: PropTypes.bool,
    animation: PropTypes.bool,
    scrollable: PropTypes.bool, 
    centered:PropTypes.bool,
    modalText:PropTypes.string, 
};

ModalTypes.defaultProps = {
    size: 'md',
    show: false,
    animation: true,
    modalText: '',
};

export default ModalTypes;