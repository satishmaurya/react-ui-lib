import React from "react";
import PropTypes from "prop-types";

const SpinnerTypes= () => <>SpinnerTypes</>;

SpinnerTypes.propTypes={
    animation:PropTypes.oneOf(['border','grow']),
    size:PropTypes.oneOf(['xs','sm','md','lg']),
    variant: PropTypes.oneOf([ 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
};

SpinnerTypes.defaultProps = {
    size: 'md',
    variant: 'primary',
};

export default SpinnerTypes;