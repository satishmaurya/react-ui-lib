import React from "react";
import PropTypes from "prop-types";

const AvatarTypes= () => <>AvatarTypes</>;

AvatarTypes.propTypes={
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm','md', 'lg']),
  alt: PropTypes.string,
  subTitle: PropTypes.string,
  title: PropTypes.string,
};

AvatarTypes.defaultProps = {};

export default AvatarTypes;