// src/components/EventGenresChart.js

import { useState, useEffect } from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend, Cell, Sector } from 'recharts';

const EventGenresChart = ({ events }) => {
  const [data, setData] = useState([]);
  const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
  const colors = ['#444e86', '#955196', '#dd5182', '#ff6e54','#ffa600'];

  useEffect(() => {
    setData(getData());
  }, [`${events}`]);

  const getData = () => {
    const data = genres.map((genre) => {
      const filteredEvents = events.filter((event) =>
        event.summary.includes(genre)
      );
      return {
        name: genre,
        value: filteredEvents.length
      };
    });
    return data;
  };

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    outerRadius,
    innerRadius,
    percent,
    index
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return percent ? (
      <text
        x={x}
        y={y}
        fill="#fff"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };

  return (
    <ResponsiveContainer
      width="99%"
      height={400}
    >
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          fill="#8884d8"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={110}
        >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index]}/>
        ))}
        </Pie>
        <Legend verticalAlign="bottom" height={36}/>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenresChart;
