import React from "react";
import { LineChart, Line, XAxis } from "recharts";

const studentMarks = [
  {
    id: 1,
    name: "Arif Hossain",
    math: 85,
    english: 78,
    science: 90,
    ict: 88,
  },
  {
    id: 2,
    name: "Fatema Akter",
    math: 92,
    english: 81,
    science: 86,
    ict: 91,
  },
  {
    id: 3,
    name: "Jahidul Islam",
    math: 74,
    english: 65,
    science: 70,
    ict: 72,
  },
  {
    id: 4,
    name: "Nasrin Jahan",
    math: 88,
    english: 90,
    science: 95,
    ict: 93,
  },
  {
    id: 5,
    name: "Tariqul Islam",
    math: 60,
    english: 55,
    science: 68,
    ict: 62,
  },
  {
    id: 6,
    name: "Sadia Khatun",
    math: 80,
    english: 85,
    science: 78,
    ict: 82,
  },
  {
    id: 7,
    name: "Rafi Ahmed",
    math: 90,
    english: 88,
    science: 91,
    ict: 89,
  },
  {
    id: 8,
    name: "Mim Chowdhury",
    math: 67,
    english: 70,
    science: 72,
    ict: 75,
  },
  {
    id: 9,
    name: "Shuvo Mia",
    math: 77,
    english: 69,
    science: 73,
    ict: 80,
  },
  {
    id: 10,
    name: "Ayesha Siddika",
    math: 95,
    english: 92,
    science: 94,
    ict: 96,
  },
];

const Chart = () => {
return (
   <LineChart width={500} height={300} data={studentMarks}> 
   {/* <XAxis dataKey='name'></XAxis> */}
   <Line  dataKey="math" stroke="#8884d8" />
   </LineChart>
);
};

export default Chart;
