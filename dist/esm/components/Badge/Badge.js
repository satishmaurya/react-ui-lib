"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Badge = _interopRequireDefault(require("react-bootstrap/Badge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Badge = function Badge(props) {
  var children = props.children,
      pill = props.pill,
      variant = props.variant;
  return /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
    pill: pill,
    variant: variant
  }, children);
};

var _default = Badge;
exports["default"] = _default;