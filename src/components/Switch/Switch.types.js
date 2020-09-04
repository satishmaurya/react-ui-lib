import React from 'react';
import PropTypes from 'prop-types';

const SwitchTypes = () => <>Switch</>;

SwitchTypes.propTypes = {
    size:PropTypes.string,
    onClick:PropTypes.func,
    id: PropTypes.string,
    name: PropTypes.string,
};

SwitchTypes.defaultProps = {
  
};

export default SwitchTypes ;
