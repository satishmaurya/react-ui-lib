"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

require("@testing-library/jest-dom/extend-expect");

var _Avatar = _interopRequireDefault(require("../Avatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Connections Table', function () {
  var wrapper;
  beforeAll(function () {
    wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Avatar.default, null));
  });
  it('should render properly', function () {
    expect(wrapper).toMatchSnapshot(); // console.log('-----------', wrapper.debug());
  });
});