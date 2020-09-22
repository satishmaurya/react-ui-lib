import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line,AreaChart, Area,PieChart, Pie, Cell,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, } from 'recharts';

export const CustomBarChart = (props) => {
    const { width, height, margin , data} = props;
    return (
        <>
        <BarChart width={width} height={height} data={data} margin={margin}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="female" stackId="a" fill="#8884d8" />
            <Bar dataKey="male" stackId="a" fill="#82ca9d" />
            <Bar dataKey="uv" fill="#ffc658" />
        </BarChart>
      </>
    );
}

export const CustomSimpleLineChart = (props) => {
  const { width, height, margin , data} = props;
  return (
    <>
      <LineChart
        width={width}
        height={height}
        data={data}
        margin={margin}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </>
  )
}

export const CustomTinyLineChart = (props) => {
  const { width, height, data } = props;
  return (
    <>
     <LineChart width={width} height={height} data={data}>
        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </>
  )
}

export const CustomAreaChart = (props) => {
  const { width, height, margin , data} = props;
    return (
      <AreaChart
        width={width}
        height={height}
        data={data}
        margin={margin}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    );
  }

  export const CustomStackedAreaChart = (props) => {
    const { width, height, margin , data} = props;
      return (
        <AreaChart
        width={width}
        height={height}
        data={data}
        margin={margin}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
      </AreaChart>
      );
    }

export const CustomPieChartWithCustomizedLabel = (props) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index,
  }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
    const { width, height, data } = props;
    return (
      <PieChart width={width} height={height}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
    );
}

export const CustomRadarChart = (props) => {
  const { width, height, data } = props;
    return (
      <RadarChart cx={300} cy={250} outerRadius={150} width={width} height={height} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    )
}
