import React from 'react';
import Tbody from './Tbody';

const ProductTable = ({products}) => {
    return (
        <div>
            <table className='table'>
                <thead>
                    <tr className=' bg-gray-200 text-black flex flex-row justify-between gap-4 p-3 rounded-lg'>
                        <th>No.</th>
                        <th>Name</th>
                        <th> Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <Tbody tableData = {products}></Tbody>
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;