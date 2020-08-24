import React from 'react';
import PropTypes from 'prop-types';

const CheckBoxTypes = () => <>Radio</>;

CheckBoxTypes.propTypes = {
  children: PropTypes.string,
  value: PropTypes.string,
  isDisabled: PropTypes.bool,
  isChecked: PropTypes.bool,
  label: PropTypes.string,
   
  id: PropTypes.string,
  isInvalid: PropTypes.bool,
  name: PropTypes.string,
};

CheckBoxTypes.defaultProps = {
  
};

export default CheckBoxTypes ;
