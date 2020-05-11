import React from "react";
import PropTypes from "prop-types";

const BoxTypes= () => <>Box</>;

BoxTypes.propTypes={
    justifyItems: PropTypes.oneOf([ 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'self-start' | 'self-end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'start' | 'end' | 'baseline' | 'first baseline' | 'last baseline' ]),
    justifyContent:PropTypes.oneOf(['flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'start' | 'end' | 'left' | 'right']),
    alignItems:PropTypes.oneOf(['stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'first baseline' | 'last baseline' | 'start' | 'end' | 'self-start' | 'self-end']),
    flexWrap: PropTypes.oneOf([ 'nowrap' | 'wrap' | 'wrap-reverse']),
    flexDirection: PropTypes.string,
    alignSelf: PropTypes.oneOf(['auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch']),
    display: PropTypes.oneOf(['flex' | 'inline' | 'inline-block' | 'none']),
    p: PropTypes.string,
    m: PropTypes.string,
    pt: PropTypes.string,
    pb: PropTypes.string,
    pl: PropTypes.string,
    pr: PropTypes.string,
    mt: PropTypes.string,
    mb: PropTypes.string,
    ml: PropTypes.string,
    mr: PropTypes.string,



};

BoxTypes.defaultProps = {
    justifyItems: ' ',
    justifyContent: ' ',
    alignItems: '',
    flexWrap:'',
    flexDirection:'',
    display: 'block',
    p:'10px',
    m:'10px',
};

export default BoxTypes;