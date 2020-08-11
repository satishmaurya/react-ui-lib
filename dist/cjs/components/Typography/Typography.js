"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("./Typography.styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Typography = function Typography(props) {
  var children = props.children,
      type = props.type,
      as = props.as,
      isBold = props.isBold,
      isItalic = props.isItalic;
  return /*#__PURE__*/_react.default.createElement(_Typography.default, {
    type: type,
    as: as,
    isBold: isBold,
    isItalic: isItalic
  }, children);
};

var _default = Typography;
exports.default = _default;