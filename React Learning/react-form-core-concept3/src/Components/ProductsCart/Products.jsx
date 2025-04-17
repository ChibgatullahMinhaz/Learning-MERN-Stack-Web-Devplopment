import React, { useState } from 'react'
import ProductForm from './ProductForm'
import ProductTable from './ProductTable'

export const Products = () => {
    const [products, setProducts]= useState([]);
    const handleAddProducts = newProduct => {
        setProducts([...products, newProduct]);
    }
  return (
    <div>
        <h2 className='text-2xl font-bold'>Products</h2>
        <ProductForm  handleAddProducts={handleAddProducts}></ProductForm>
        <ProductTable products={products}></ProductTable>
    </div>
  )
}
