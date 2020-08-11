import React from "react";
import PropTypes from "prop-types";

const CardTypes= () => <>StackCard</>;

CardTypes.propTypes={
    isDisabled: PropTypes.bool,
    children:PropTypes.node,
    width: PropTypes.string,
    activeKey:PropTypes.any,
    id:PropTypes.string,
    defaultActiveKey:PropTypes.any,
    mountOnEnter:PropTypes.bool,
    onSelect:PropTypes.func,
    unmountOnExit:PropTypes.bool,
    transition:PropTypes.bool,
    variant:PropTypes.oneOf(['tabs','pills','leftPills']),

};

CardTypes.defaultProps = {
    variant: 'tabs',
    isDisabled: false,
};

export default CardTypes;