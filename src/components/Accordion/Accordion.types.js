import React from "react";
import PropTypes from "prop-types";

const AccordionTypes= () => <>AccordionTypes</>;

AccordionTypes.propTypes={
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm','md', 'lg']),
  alt: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

AccordionTypes.defaultProps = {};

export default AccordionTypes;