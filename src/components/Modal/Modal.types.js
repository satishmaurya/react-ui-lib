import React from "react";
import PropTypes from "prop-types";

const ModalTypes= () => <>ModalTypes</>;
 
ModalTypes.propTypes={
  snackBarHeading: PropTypes.bool,
  sanckBarText: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool
};

ModalTypes.defaultProps = {
  snackBarHeading: 'True',
  sanckBarText: 'True',
  success: 'False',
  error: 'False'
};

export default ModalTypes;