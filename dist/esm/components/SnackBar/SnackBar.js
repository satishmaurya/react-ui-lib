"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SnackBar = require("./SnackBar.styled");

var _Toast = _interopRequireDefault(require("react-bootstrap/Toast"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SnackBar = function SnackBar(props) {
  var sanckBarText = props.sanckBarText,
      snackBarHeading = props.snackBarHeading,
      success = props.success,
      error = props.error;
  return (
    /*#__PURE__*/
    // <StyledToast> SnackBar Styled Toast </StyledToast>
    _react["default"].createElement(_SnackBar.StyledToast, props, /*#__PURE__*/_react["default"].createElement(_Toast["default"], null, /*#__PURE__*/_react["default"].createElement(_Toast["default"].Header, null, /*#__PURE__*/_react["default"].createElement("strong", {
      className: "mr-auto"
    }, snackBarHeading)), /*#__PURE__*/_react["default"].createElement(_Toast["default"].Body, null, sanckBarText)))
  );
};

var _default = SnackBar;
exports["default"] = _default;