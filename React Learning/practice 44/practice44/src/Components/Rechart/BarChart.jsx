import React, { use } from 'react';

const BarChart = ({promiessatudentMarks}) => {
    const  marksdataRes = use(promiessatudentMarks);
    console.log(marksdataRes);
    return (
        <div>
            
        </div>
    );
};

export default BarChart;