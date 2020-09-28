import React from "react";
import PropTypes from "prop-types";

const SocialMediaTypes= () => <>Social</>;

SocialMediaTypes.propTypes={
    size: PropTypes.oneOf(['sm','md','lg']),
    url: PropTypes.string, 
    color: PropTypes.string,
    isRound: PropTypes.bool,
};

SocialMediaTypes.defaultProps = {
    size: 'md',
    color: 'default color',
    isRound: 'false',
};

export default SocialMediaTypes;