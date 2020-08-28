import React from 'react';
import PropTypes from 'prop-types';

const RadioTypes = () => <>Radio</>;

RadioTypes.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

RadioTypes.defaultProps = {
  disabled: false,
  error: false,
};

export default RadioTypes ;
