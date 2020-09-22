import React from "react";
import PropTypes from "prop-types";

const SocialMediaTypes= () => <>Social</>;

SocialMediaTypes.propTypes={
    size: PropTypes.oneOf(['sm','md','lg']),
    
};

SocialMediaTypes.defaultProps = {
    size: 'md',
    
};

export default SocialMediaTypes;