import React from "react";
import PropTypes from "prop-types";

const RadialProgressBarTypes= () => <>ProgressBar</>;

RadialProgressBarTypes.propTypes={
    percentage: PropTypes.number,
    variant: PropTypes.oneOf([ 'primary', 'success', 'danger' ]),
};

RadialProgressBarTypes.defaultProps = {
    percentage: '45%',
    variant: 'primary',
};

export default RadialProgressBarTypes;