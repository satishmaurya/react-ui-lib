import React from "react";
import PropTypes from "prop-types";

const AdvanceTableTypes= () => <>AdvanceTableTypes</>;

AdvanceTableTypes.propTypes={
    size:PropTypes.oneOf(['xs','sm','md','lg']),
    responsive:PropTypes.oneOf(['xs','sm','md','lg']),
    variant: PropTypes.oneOf([ 'light', 'dark' ]),
    striped: PropTypes.bool,
    bordered: PropTypes.bool,
    hover: PropTypes.bool,
    children:PropTypes.node,
    bsPrefix:PropTypes.string,
};

AdvanceTableTypes.defaultProps = {
    size: 'md',
    responsive: true,
    variant: 'light',
    striped: false,
    bordered: false,
    hover: false,
};

export default AdvanceTableTypes;