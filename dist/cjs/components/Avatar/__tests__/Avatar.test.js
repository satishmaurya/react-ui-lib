"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

require("@testing-library/jest-dom/extend-expect");

var _react2 = require("@testing-library/react");

var _Avatar = _interopRequireDefault(require("../Avatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// describe('***--- Avatar Component --- ***', () => {
//   it('test', () => {
//     expect(1).toEqual(1);
//   });
// });
describe('Connections Table', function () {
  var wrapper;
  beforeAll(function () {
    wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Avatar.default, null));
  }); // beforeEach(() => {
  //   wrapper = shallow(
  //     <Avatar />)
  //   //   <CmsContext.Provider value={cmsContextValue}>
  //   //     <FeatureComponent {...props} />
  //   //   </CmsContext.Provider>,
  //   // ).dive().dive().dive();
  // });

  it('should render properly', function () {
    expect(wrapper).toMatchSnapshot();
    console.log('-----------', wrapper.debug());
  }); //   it('Simulate mutation onClick on Button', async () => {
  //     wrapper.find('#header').simulate('click');
  //   });
});