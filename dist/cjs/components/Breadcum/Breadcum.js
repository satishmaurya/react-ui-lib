"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "StyledBreadcum", {
  enumerable: true,
  get: function get() {
    return _Breadcum.default;
  }
});
exports.Breadcum = void 0;

var _react = _interopRequireDefault(require("react"));

var _Breadcum = _interopRequireDefault(require("./Breadcum.styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Breadcum = function Breadcum(props) {
  var children = props.children,
      bgColor = props.bgColor,
      paginationType = props.paginationType,
      size = props.size;
  return /*#__PURE__*/_react.default.createElement(_Breadcum.default, {
    bgColor: bgColor,
    size: size,
    paginationType: paginationType
  }, children);
};

exports.Breadcum = Breadcum;