"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactSocialIcons = _interopRequireDefault(require("react-social-icons"));

var _SocialMediaGroup = _interopRequireDefault(require("./SocialMediaGroup.styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SocialMediaGroup = function SocialMediaGroup(props) {
  var size = props.size,
      url = props.url,
      network = props.network;
  return /*#__PURE__*/_react.default.createElement(_SocialMediaGroup.default, {
    className: "icon-bar",
    size: size
  });
};

var _default = SocialMediaGroup;
exports.default = _default;