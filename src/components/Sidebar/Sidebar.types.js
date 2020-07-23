import React from "react";
import PropTypes from "prop-types";

const SidebarTypes= () => <>Sidebar</>;

SidebarTypes.propTypes={
    position: PropTypes.oneOf(['left', 'right']),
    onClose: PropTypes.func,
    isCloseButtonShown: PropTypes.bool,
    children:PropTypes.node,
    id:PropTypes.string,
    isDrawer:PropTypes.bool,
};

SidebarTypes.defaultProps = {
    position: 'left'
};

export default SidebarTypes;