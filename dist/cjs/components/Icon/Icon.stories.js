"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _react3 = _interopRequireDefault(require("@storybook/addon-centered/react"));

var _options = require("../../../.storybook/options");

var _README = _interopRequireDefault(require("./README.md"));

var _Icon = _interopRequireDefault(require("./Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react2.storiesOf)('Components|Images and icons/Icon', module);

var arrayToObject = function arrayToObject(array) {
  return array.reduce(function (obj, item) {
    obj[item.displayName] = item.iconName;
    return obj;
  }, {});
};

var options = arrayToObject(Icons);
stories.addParameters(_options.storyOptions);
stories.addDecorator(_addonKnobs.withKnobs);
stories.addDecorator(_react3.default);
stories.add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    size: 12,
    icon: (0, _addonKnobs.select)('Icon', options, 'add')
  }), /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon: (0, _addonKnobs.select)('Icon', options, 'add')
  }));
}, {
  notes: _README.default
});