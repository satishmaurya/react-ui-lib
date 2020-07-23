import React from "react";
import PropTypes from "prop-types";

const RadialProgressBarTypes= () => <>ProgressBar</>;

RadialProgressBarTypes.propTypes={
    percentage: PropTypes.number,
    sqsize: PropTypes.number,
    strokeWidth: PropTypes.number,
    variant: PropTypes.oneOf([ 'primary', 'success', 'danger' ]),
};

RadialProgressBarTypes.defaultProps = {
    percentage: '45%',
    variant: 'primary',
    sqsize: 232,
    strokeWidth: 9,
};

export default RadialProgressBarTypes;