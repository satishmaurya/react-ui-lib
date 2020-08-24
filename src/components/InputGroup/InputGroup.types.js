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
    bsPrefix:PropTypes.string,
    children:PropTypes.node,
    labelBg:PropTypes.string,
    rounded:PropTypes.oneOf(['rounded','default']),
    icon:PropTypes.string,
    placeholder:PropTypes.string,
    id:PropTypes.string,
    rows:PropTypes.string,
};


    InputGroupTypes.defaultProps = {
    type: 'text',
    as: '',
    disabled: false,
    size:'default',
    labelText:'',
    labelInline:false,
    rounded: 'default',
    radioBtn: false,
};

export default InputGroupTypes;