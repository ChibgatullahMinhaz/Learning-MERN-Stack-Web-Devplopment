import React, { use } from 'react'
import { Bar, BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

export const Barchart = ({promies}) => {
    const res = use(promies);
    const marksData = res.data.map((data )=> {
        const studentData = {
            id: data.id,
            name: data.name,
            math : data.marks.math,
            english : data.marks.english,
            science : data.marks.science,
        }
        const avg = (studentData.math + studentData.english + studentData.science) / 3;
        studentData.avg = avg;
        return studentData
    });

    console.log(marksData);
  return (
    <div>
        <BarChart width={600} height={300} data={marksData}>
        <XAxis dataKey="name"  />
        <YAxis />
        <Tooltip></Tooltip>
            <Bar dataKey='avg' fill='gold'></Bar>
        </BarChart>
        <LineChart width={600} height={300} data={marksData}>
        <XAxis dataKey="name"  />
        <YAxis />
        <Tooltip></Tooltip>
        <Line dataKey='english' stroke="#8884d8"></Line>
        <Line dataKey='math' stroke='blue'></Line>
        <Line dataKey='science' stroke="yellow"></Line>
        </LineChart>
    </div>
  )
}
