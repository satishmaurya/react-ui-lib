"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var RadialProgressBar = _styledComponents["default"].div.withConfig({
  displayName: "RadialProgressBarstyled__RadialProgressBar",
  componentId: "sc-8mp9aj-0"
})(["{.circle-background,.circle-progress{fill:none;}.circle-background{stroke:#ddd;}.circle-text{font-weight:bold;}", " ", "}"], function (props) {
  return props.strokeColor ? (0, _styledComponents.css)([".circle-progress{stroke:", ";background-position-x:initial;stroke-linecap:round;stroke-linejoin:round;animation:", "}.stackui-radialProgress{border-radius:50%;background:#fff;font-size:18px;font-weight:600;align-items:center;justify-content:center;display:flex;flex-direction:column;}"], props.strokeColor, function (props) {
    return props.animate && (0, _styledComponents.css)(["progress ", " ", ""], props.animationDelay, props.animationType);
  }) : (0, _styledComponents.css)([""]);
}, function (props) {
  var sizeVal = props.children.props.children;
  var a = props.children.props.width;
  var strokeSize = sizeVal.map(function (item) {
    return {
      sizeWidth: item.props.strokeWidth,
      percent: item._owner.memoizedProps.percentage
    };
  });

  for (var i = 0; i < strokeSize.length; i++) {
    var sub = a - parseInt(strokeSize[i].sizeWidth);
    var radius = sub / 2;
    var dashArray = radius * Math.PI * 2;
    var finalPercent = strokeSize[i].percent;
    var animateOffset = dashArray - dashArray * finalPercent / 100;
    console.log('animate offset', animateOffset);
    return "\n          @keyframes progress {\n            from {\n                stroke-dashoffset: ".concat(dashArray, ";\n            }\n            to {\n                stroke-dashoffset: ").concat(animateOffset, ";\n            }\n        }\n          ");
  }
});

var _default = RadialProgressBar;
exports["default"] = _default;