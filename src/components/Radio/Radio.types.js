import React from 'react';
import PropTypes from 'prop-types';

const RadioTypes = () => <>Radio</>;

RadioTypes.propTypes = {
  children: PropTypes.string,
  value: PropTypes.string,
  isDisabled: PropTypes.bool,
  isChecked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  id: PropTypes.string,
  isInvalid: PropTypes.bool,
  name: PropTypes.string,
};

RadioTypes.defaultProps = {
  isDisabled: false,
  isInvalid: false,
};

export default RadioTypes ;
