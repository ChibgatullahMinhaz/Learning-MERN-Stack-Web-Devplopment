import React from 'react';

const Tbody = ({tableData}) => {
    return (
      <>
       {
        tableData.map((product, index) => (
            <tr key={index} className="flex flex-row justify-between gap-4 p-3 rounded-lg bg-gray-100 text-black">
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td><button className='btn btn-danger'>Delete</button></td>
            </tr>
        ))
       }
      </>
    );
};

export default Tbody;