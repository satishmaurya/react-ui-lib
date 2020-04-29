"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Card = _interopRequireDefault(require("./Card.styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Card = function Card(props) {
  var color = props.color,
      bgColor = props.bgColor,
      children = props.children,
      cardTitle = props.cardTitle,
      width = props.width,
      alignText = props.alignText,
      alignCard = props.alignCard,
      imgUrl = props.imgUrl,
      subTitle = props.subTitle,
      imgPos = props.imgPos,
      border = props.border;

  if (imgPos === "middle") {
    return /*#__PURE__*/_react["default"].createElement(_Card["default"], _extends({
      imgUrl: imgUrl,
      color: color,
      bgColor: bgColor
    }, props), /*#__PURE__*/_react["default"].createElement(_Card["default"].Body, null, /*#__PURE__*/_react["default"].createElement(_Card["default"].Title, {
      as: "h5"
    }, cardTitle), /*#__PURE__*/_react["default"].createElement(_Card["default"].Subtitle, {
      as: "h6",
      className: "text-muted"
    }, subTitle)), /*#__PURE__*/_react["default"].createElement("img", {
      src: imgUrl
    }), /*#__PURE__*/_react["default"].createElement(_Card["default"].Body, null, /*#__PURE__*/_react["default"].createElement(_Card["default"].Text, null, children)));
  } else if (imgPos === "top") {
    return /*#__PURE__*/_react["default"].createElement(_Card["default"], _extends({
      imgUrl: imgUrl,
      color: color,
      bgColor: bgColor
    }, props), /*#__PURE__*/_react["default"].createElement("img", {
      src: imgUrl
    }), /*#__PURE__*/_react["default"].createElement(_Card["default"].Body, null, /*#__PURE__*/_react["default"].createElement(_Card["default"].Title, {
      as: "h5"
    }, cardTitle), /*#__PURE__*/_react["default"].createElement(_Card["default"].Subtitle, {
      as: "h6"
    }, subTitle), /*#__PURE__*/_react["default"].createElement(_Card["default"].Text, null, children)));
  } else if (imgPos === "bottom") {
    return /*#__PURE__*/_react["default"].createElement(_Card["default"], _extends({
      imgUrl: imgUrl,
      color: color,
      bgColor: bgColor
    }, props), /*#__PURE__*/_react["default"].createElement(_Card["default"].Body, null, /*#__PURE__*/_react["default"].createElement(_Card["default"].Title, {
      as: "h5"
    }, cardTitle), /*#__PURE__*/_react["default"].createElement(_Card["default"].Subtitle, {
      as: "h6"
    }, subTitle), /*#__PURE__*/_react["default"].createElement(_Card["default"].Text, null, children)), /*#__PURE__*/_react["default"].createElement("img", {
      src: imgUrl
    }));
  } else if (imgPos === "bg") {
    return /*#__PURE__*/_react["default"].createElement(_Card["default"], _extends({
      imgUrl: imgUrl,
      color: color,
      bgColor: bgColor
    }, props), /*#__PURE__*/_react["default"].createElement("img", {
      src: imgUrl
    }), /*#__PURE__*/_react["default"].createElement(_Card["default"].ImgOverlay, null, /*#__PURE__*/_react["default"].createElement(_Card["default"].Title, {
      as: "h5"
    }, cardTitle), /*#__PURE__*/_react["default"].createElement(_Card["default"].Subtitle, {
      as: "h6"
    }, subTitle), /*#__PURE__*/_react["default"].createElement(_Card["default"].Text, null, children)));
  } else {
    console.log(bgColor, '---bg');
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Card["default"], _extends({
      imgUrl: imgUrl,
      color: color,
      bgColor: bgColor
    }, props), /*#__PURE__*/_react["default"].createElement(_Card["default"].Body, null, /*#__PURE__*/_react["default"].createElement(_Card["default"].Title, {
      as: "h5"
    }, cardTitle), /*#__PURE__*/_react["default"].createElement(_Card["default"].Subtitle, {
      as: "h6"
    }, subTitle), /*#__PURE__*/_react["default"].createElement(_Card["default"].Text, null, children)), /*#__PURE__*/_react["default"].createElement("img", {
      src: imgUrl
    })));
  }
};

var _default = Card;
exports["default"] = _default;