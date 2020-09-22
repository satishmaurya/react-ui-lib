import React from "react";
import PropTypes from "prop-types";

const ChartTypes= () => <>Chart</>;

ChartTypes.propTypes={
    data: PropTypes.array,
    width: PropTypes.string,
    height:PropTypes.string
};

ChartTypes.defaultProps = {
    width: 'auto',
    height:'auto',
    options:{}
};

export default ChartTypes;