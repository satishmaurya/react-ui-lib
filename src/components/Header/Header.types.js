import React from "react";
import PropTypes from "prop-types";

const HeaderTypes= () => <>ProgressBar</>;

HeaderTypes.propTypes={
    background:PropTypes.string,
    fixed:PropTypes.bool,
}

HeaderTypes.defaultProps = {
    background: 'grey',
    fixed: 'true',
}

export default HeaderTypes;