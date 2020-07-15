import React from "react";
import PropTypes from "prop-types";

const InputGroupTypes= () => <>InputGroup</>;

InputGroupTypes.propTypes={
    type: PropTypes.oneOf(['text','number','password','date','email','range','color']),
    as: PropTypes.oneOf(['textarea', 'select','multiselect']),
    disabled: PropTypes.bool,
    size:PropTypes.oneOf(['sm','lg']),
    labelText:PropTypes.string,
    labelInline:PropTypes.bool,
    value:PropTypes.string,
    rounded:PropTypes.oneOf(['rounded','default']),
};
    InputGroupTypes.defaultProps = {
    type: 'text',
    as: '',
    disabled: false,
    size:'default',
    labelText:'',
    labelInline:false,
    
};

export default InputGroupTypes;