import React from "react";
import PropTypes from "prop-types";

const SocialMediaTypes= () => <>Social</>;

SocialMediaTypes.propTypes={
    size: PropTypes.oneOf(['sm','md','lg']),
    url: PropTypes.string, 
};

SocialMediaTypes.defaultProps = {
    size: 'md',
    
};

export default SocialMediaTypes;