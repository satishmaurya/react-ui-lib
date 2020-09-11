import React from "react";
import PropTypes from "prop-types";

const StackModalTypes= () => <>StackModalTypes</>;
 
StackModalTypes.propTypes={
  snackBarHeading: PropTypes.string,
  sanckBarText: PropTypes.string,
  success: PropTypes.string,
  error: PropTypes.string
};

StackModalTypes.defaultProps = {
   
};

export default StackModalTypes;