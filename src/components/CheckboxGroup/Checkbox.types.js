import React from 'react';
import PropTypes from 'prop-types';

const CheckBoxTypes = () => <>Radio</>;

CheckBoxTypes.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.bool,
  name: PropTypes.string,
};


CheckBoxTypes.defaultProps = {
  disabled: 'false',
  error: 'false',
};

export default CheckBoxTypes ;
