function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import StyledCard from "./Card.styled";
import Card from 'react-bootstrap/Card';

const StackCard = props => {
  const {
    color,
    bgColor,
    children,
    cardTitle,
    width,
    alignText,
    alignCard,
    imgUrl,
    subTitle,
    imgPos,
    border
  } = props;

  if (imgPos === "middle") {
    return React.createElement(StyledCard, _extends({
      imgUrl: imgUrl,
      color: color,
      bgColor: bgColor
    }, props), React.createElement(Card.Body, null, React.createElement(Card.Title, {
      as: "h5"
    }, cardTitle), React.createElement(Card.Subtitle, {
      as: "h6",
      className: "text-muted"
    }, subTitle)), React.createElement("img", {
      src: imgUrl
    }), React.createElement(Card.Body, null, React.createElement(Card.Text, null, children)));
  } else if (imgPos === "top") {
    return React.createElement(StyledCard, _extends({
      imgUrl: imgUrl,
      color: color,
      bgColor: bgColor
    }, props), React.createElement("img", {
      src: imgUrl
    }), React.createElement(Card.Body, null, React.createElement(Card.Title, {
      as: "h5"
    }, cardTitle), React.createElement(Card.Subtitle, {
      as: "h6"
    }, subTitle), React.createElement(Card.Text, null, children)));
  } else if (imgPos === "bottom") {
    return React.createElement(StyledCard, _extends({
      imgUrl: imgUrl,
      color: color,
      bgColor: bgColor
    }, props), React.createElement(Card.Body, null, React.createElement(Card.Title, {
      as: "h5"
    }, cardTitle), React.createElement(Card.Subtitle, {
      as: "h6"
    }, subTitle), React.createElement(Card.Text, null, children)), React.createElement("img", {
      src: imgUrl
    }));
  } else if (imgPos === "bg") {
    return React.createElement(StyledCard, _extends({
      imgUrl: imgUrl,
      color: color,
      bgColor: bgColor
    }, props), React.createElement("img", {
      src: imgUrl
    }), React.createElement(Card.ImgOverlay, null, React.createElement(Card.Title, {
      as: "h5"
    }, cardTitle), React.createElement(Card.Subtitle, {
      as: "h6"
    }, subTitle), React.createElement(Card.Text, null, children)));
  } else {
    console.log(bgColor, '---bg');
    return React.createElement(React.Fragment, null, React.createElement(StyledCard, _extends({
      imgUrl: imgUrl,
      color: color,
      bgColor: bgColor
    }, props), React.createElement(Card.Body, null, React.createElement(Card.Title, {
      as: "h5"
    }, cardTitle), React.createElement(Card.Subtitle, {
      as: "h6"
    }, subTitle), React.createElement(Card.Text, null, children)), React.createElement("img", {
      src: imgUrl
    })));
  }
};

export default StackCard;