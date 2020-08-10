"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTablePrefix = exports.StyledTableSuffix = exports.StyledAdvanceTable = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Table = _interopRequireDefault(require("react-bootstrap/Table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledAdvanceTable = (0, _styledComponents.default)(_Table.default).withConfig({
  displayName: "AdvanceTablestyled__StyledAdvanceTable",
  componentId: "sc-1lnjl3l-0"
})(["", ""], function (props) {
  return props.size === "xs" ? (0, _styledComponents.css)(["", " background:red;"], ''
  /* height:.15rem; */
  ) : props.size === "sm" ? (0, _styledComponents.css)(["height:.30rem;"]) : props.size === "md" ? (0, _styledComponents.css)(["background:red !important;height:.50rem;"]) : props.size === "lg" ? (0, _styledComponents.css)(["height:2rem;"]) : (0, _styledComponents.css)(["height:1rem;"]);
});
exports.StyledAdvanceTable = StyledAdvanceTable;

var StyledTableSuffix = _styledComponents.default.span.withConfig({
  displayName: "AdvanceTablestyled__StyledTableSuffix",
  componentId: "sc-1lnjl3l-1"
})(["color:#000;margin-left:4px;font-weight:bold;"]);

exports.StyledTableSuffix = StyledTableSuffix;

var StyledTablePrefix = _styledComponents.default.span.withConfig({
  displayName: "AdvanceTablestyled__StyledTablePrefix",
  componentId: "sc-1lnjl3l-2"
})(["margin-right:4px;"]);

exports.StyledTablePrefix = StyledTablePrefix;