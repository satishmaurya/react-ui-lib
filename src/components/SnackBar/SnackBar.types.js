import React from "react";
import PropTypes from "prop-types";

const SnackBarTypes= () => <>SnackBarTypes</>;
 
SnackBarTypes.propTypes={
  snackBarHeading: PropTypes.bool,
  sanckBarText: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool
};

SnackBarTypes.defaultProps = {
  snackBarHeading: 'True',
  sanckBarText: 'True',
  success: 'False',
  error: 'False'
};

export default SnackBarTypes;