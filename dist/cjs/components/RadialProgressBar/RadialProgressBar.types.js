"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _apexcharts = require("apexcharts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadialProgressBarTypes = function RadialProgressBarTypes() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "ProgressBar");
};

RadialProgressBarTypes.propTypes = {
  percentage: _propTypes.default.number,
  sqsize: _propTypes.default.number,
  strokeWidth: _propTypes.default.number,
  strokeColor: _propTypes.default.string
};
RadialProgressBarTypes.defaultProps = {
  percentage: '45%',
  strokeColor: 'string',
  sqsize: 232,
  strokeWidth: 9
};
var _default = RadialProgressBarTypes;
exports.default = _default;