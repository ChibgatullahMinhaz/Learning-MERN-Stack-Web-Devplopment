import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  LabelList,
  Tooltip
} from "recharts";

const BookChart = ({ storedData }) => {
  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
         C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    }, ${y}
         C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
         Z`;

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#a569bd"];

  return (
    <div className="p-4">
      <ResponsiveContainer
      width="100%"
      height={400}
      className="bg-white rounded-lg shadow-sm"
    >
      <BarChart data={storedData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="consultationFee" shape={<TriangleBar />}>
          {storedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
          <LabelList dataKey="consultationFee" position="top" />
          <Tooltip></Tooltip>
        </Bar>{" "}
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default BookChart;
