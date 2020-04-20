import React from "react";
import PropTypes from "prop-types";

const BadgeTypes= () => <>BadgeTypes</>;

BadgeTypes.propTypes={
    variant: PropTypes.oneOf([ 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
    pill: PropTypes.bool,
};

BadgeTypes.defaultProps = {
    variant: 'primary',
    pill: false,
};

export default BadgeTypes;