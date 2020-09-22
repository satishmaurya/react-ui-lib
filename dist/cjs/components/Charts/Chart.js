"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomRadarChart = exports.CustomPieChartWithCustomizedLabel = exports.CustomStackedAreaChart = exports.CustomAreaChart = exports.CustomTinyLineChart = exports.CustomSimpleLineChart = exports.CustomBarChart = void 0;

var _react = _interopRequireDefault(require("react"));

var _recharts = require("recharts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomBarChart = function CustomBarChart(props) {
  var width = props.width,
      height = props.height,
      margin = props.margin,
      data = props.data;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_recharts.BarChart, {
    width: width,
    height: height,
    data: data,
    margin: margin
  }, /*#__PURE__*/_react.default.createElement(_recharts.CartesianGrid, {
    strokeDasharray: "3 3"
  }), /*#__PURE__*/_react.default.createElement(_recharts.XAxis, {
    dataKey: "name"
  }), /*#__PURE__*/_react.default.createElement(_recharts.YAxis, null), /*#__PURE__*/_react.default.createElement(_recharts.Tooltip, null), /*#__PURE__*/_react.default.createElement(_recharts.Legend, null), /*#__PURE__*/_react.default.createElement(_recharts.Bar, {
    dataKey: "female",
    stackId: "a",
    fill: "#8884d8"
  }), /*#__PURE__*/_react.default.createElement(_recharts.Bar, {
    dataKey: "male",
    stackId: "a",
    fill: "#82ca9d"
  }), /*#__PURE__*/_react.default.createElement(_recharts.Bar, {
    dataKey: "uv",
    fill: "#ffc658"
  })));
};

exports.CustomBarChart = CustomBarChart;

var CustomSimpleLineChart = function CustomSimpleLineChart(props) {
  var width = props.width,
      height = props.height,
      margin = props.margin,
      data = props.data;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_recharts.LineChart, {
    width: width,
    height: height,
    data: data,
    margin: margin
  }, /*#__PURE__*/_react.default.createElement(_recharts.CartesianGrid, {
    strokeDasharray: "3 3"
  }), /*#__PURE__*/_react.default.createElement(_recharts.XAxis, {
    dataKey: "name"
  }), /*#__PURE__*/_react.default.createElement(_recharts.YAxis, null), /*#__PURE__*/_react.default.createElement(_recharts.Tooltip, null), /*#__PURE__*/_react.default.createElement(_recharts.Legend, null), /*#__PURE__*/_react.default.createElement(_recharts.Line, {
    type: "monotone",
    dataKey: "pv",
    stroke: "#8884d8",
    activeDot: {
      r: 8
    }
  }), /*#__PURE__*/_react.default.createElement(_recharts.Line, {
    type: "monotone",
    dataKey: "uv",
    stroke: "#82ca9d"
  })));
};

exports.CustomSimpleLineChart = CustomSimpleLineChart;

var CustomTinyLineChart = function CustomTinyLineChart(props) {
  var width = props.width,
      height = props.height,
      data = props.data;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_recharts.LineChart, {
    width: width,
    height: height,
    data: data
  }, /*#__PURE__*/_react.default.createElement(_recharts.Line, {
    type: "monotone",
    dataKey: "pv",
    stroke: "#8884d8",
    strokeWidth: 2
  })));
};

exports.CustomTinyLineChart = CustomTinyLineChart;

var CustomAreaChart = function CustomAreaChart(props) {
  var width = props.width,
      height = props.height,
      margin = props.margin,
      data = props.data;
  return /*#__PURE__*/_react.default.createElement(_recharts.AreaChart, {
    width: width,
    height: height,
    data: data,
    margin: margin
  }, /*#__PURE__*/_react.default.createElement(_recharts.CartesianGrid, {
    strokeDasharray: "3 3"
  }), /*#__PURE__*/_react.default.createElement(_recharts.XAxis, {
    dataKey: "name"
  }), /*#__PURE__*/_react.default.createElement(_recharts.YAxis, null), /*#__PURE__*/_react.default.createElement(_recharts.Tooltip, null), /*#__PURE__*/_react.default.createElement(_recharts.Area, {
    type: "monotone",
    dataKey: "uv",
    stroke: "#8884d8",
    fill: "#8884d8"
  }));
};

exports.CustomAreaChart = CustomAreaChart;

var CustomStackedAreaChart = function CustomStackedAreaChart(props) {
  var width = props.width,
      height = props.height,
      margin = props.margin,
      data = props.data;
  return /*#__PURE__*/_react.default.createElement(_recharts.AreaChart, {
    width: width,
    height: height,
    data: data,
    margin: margin
  }, /*#__PURE__*/_react.default.createElement(_recharts.CartesianGrid, {
    strokeDasharray: "3 3"
  }), /*#__PURE__*/_react.default.createElement(_recharts.XAxis, {
    dataKey: "name"
  }), /*#__PURE__*/_react.default.createElement(_recharts.YAxis, null), /*#__PURE__*/_react.default.createElement(_recharts.Tooltip, null), /*#__PURE__*/_react.default.createElement(_recharts.Area, {
    type: "monotone",
    dataKey: "uv",
    stackId: "1",
    stroke: "#8884d8",
    fill: "#8884d8"
  }), /*#__PURE__*/_react.default.createElement(_recharts.Area, {
    type: "monotone",
    dataKey: "pv",
    stackId: "1",
    stroke: "#82ca9d",
    fill: "#82ca9d"
  }), /*#__PURE__*/_react.default.createElement(_recharts.Area, {
    type: "monotone",
    dataKey: "amt",
    stackId: "1",
    stroke: "#ffc658",
    fill: "#ffc658"
  }));
};

exports.CustomStackedAreaChart = CustomStackedAreaChart;

var CustomPieChartWithCustomizedLabel = function CustomPieChartWithCustomizedLabel(props) {
  var COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  var RADIAN = Math.PI / 180;

  var renderCustomizedLabel = function renderCustomizedLabel(_ref) {
    var cx = _ref.cx,
        cy = _ref.cy,
        midAngle = _ref.midAngle,
        innerRadius = _ref.innerRadius,
        outerRadius = _ref.outerRadius,
        percent = _ref.percent,
        index = _ref.index;
    var radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    var x = cx + radius * Math.cos(-midAngle * RADIAN);
    var y = cy + radius * Math.sin(-midAngle * RADIAN);
    return /*#__PURE__*/_react.default.createElement("text", {
      x: x,
      y: y,
      fill: "white",
      textAnchor: x > cx ? 'start' : 'end',
      dominantBaseline: "central"
    }, "".concat((percent * 100).toFixed(0), "%"));
  };

  var width = props.width,
      height = props.height,
      data = props.data;
  return /*#__PURE__*/_react.default.createElement(_recharts.PieChart, {
    width: width,
    height: height
  }, /*#__PURE__*/_react.default.createElement(_recharts.Pie, {
    data: data,
    cx: 200,
    cy: 200,
    labelLine: false,
    label: renderCustomizedLabel,
    outerRadius: 80,
    fill: "#8884d8",
    dataKey: "value"
  }, data.map(function (entry, index) {
    return /*#__PURE__*/_react.default.createElement(_recharts.Cell, {
      key: "cell-".concat(index),
      fill: COLORS[index % COLORS.length]
    });
  })));
};

exports.CustomPieChartWithCustomizedLabel = CustomPieChartWithCustomizedLabel;

var CustomRadarChart = function CustomRadarChart(props) {
  var width = props.width,
      height = props.height,
      data = props.data;
  return /*#__PURE__*/_react.default.createElement(_recharts.RadarChart, {
    cx: 300,
    cy: 250,
    outerRadius: 150,
    width: width,
    height: height,
    data: data
  }, /*#__PURE__*/_react.default.createElement(_recharts.PolarGrid, null), /*#__PURE__*/_react.default.createElement(_recharts.PolarAngleAxis, {
    dataKey: "subject"
  }), /*#__PURE__*/_react.default.createElement(_recharts.PolarRadiusAxis, null), /*#__PURE__*/_react.default.createElement(_recharts.Radar, {
    name: "Mike",
    dataKey: "A",
    stroke: "#8884d8",
    fill: "#8884d8",
    fillOpacity: 0.6
  }));
};

exports.CustomRadarChart = CustomRadarChart;