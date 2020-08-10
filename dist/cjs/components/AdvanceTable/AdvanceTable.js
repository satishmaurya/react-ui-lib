"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _AdvanceTable = require("./AdvanceTable.styled");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const rowData = true ? page : rows;
var AdvanceTable = function AdvanceTable(props) {
  var children = props.children,
      column = props.column,
      data = props.data;
  return /*#__PURE__*/_react.default.createElement(_AdvanceTable.StyledAdvanceTable, {
    column: column,
    data: data
  }, children);
};

var _default = AdvanceTable;
exports.default = _default;