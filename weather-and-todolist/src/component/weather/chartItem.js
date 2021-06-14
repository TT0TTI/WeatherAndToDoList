import React from "react";
import {
  YAxis,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const ChartItem = ({ chartItem, menu, firstColor, lastColor }) => {
  return (
    <ResponsiveContainer width="100%" height={700}>
      <LineChart data={chartItem}>
        <defs>
          <linearGradient id="colorUv" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="20%" stopColor={firstColor} />
            <stop offset="90%" stopColor={lastColor} />
          </linearGradient>
        </defs>
        <Line
          type="monotone"
          dataKey={menu}
          stroke="url(#colorUv)"
          strokeWidth="5px"
        />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartItem;
