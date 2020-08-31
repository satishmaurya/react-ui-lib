import React from "react";
import PropTypes from "prop-types";
import { prototype } from "apexcharts";

const RadialProgressBarTypes= () => <>ProgressBar</>;

RadialProgressBarTypes.propTypes={
    percentage: PropTypes.number,
    sqsize: PropTypes.number,
    strokeWidth: PropTypes.number,
    strokeColor: PropTypes.string,
};

RadialProgressBarTypes.defaultProps = {
    percentage: '45%',
    strokeColor: 'string',
    sqsize: 232,
    strokeWidth: 9,
};

export default RadialProgressBarTypes;