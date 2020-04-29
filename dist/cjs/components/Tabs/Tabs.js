function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import StyledTabs from "./Tabs.styled";
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const StackTabs = props => {
  const {
    activeKey,
    defaultActiveKey,
    id,
    mountOnEnter,
    onSelect,
    transition,
    unmountOnExit,
    variant,
    children
  } = props;

  if (variant === "leftPills") {
    return React.createElement(StyledTabs, _extends({
      defaultActiveKey: defaultActiveKey,
      id: id
    }, props), children);
  } else {
    return React.createElement(StyledTabs, _extends({
      defaultActiveKey: defaultActiveKey,
      id: id
    }, props), children);
  }
};

export default StackTabs;