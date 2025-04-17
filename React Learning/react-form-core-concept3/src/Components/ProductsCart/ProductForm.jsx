import React, { useState } from "react";

const ProductForm = ({ handleAddProducts }) => {
  const [error, setError] = useState("");
  const handleProductsSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const newProduct = { name, price, quantity };
    if (name.length === 0) {
      setError("Product name is required");
      return;
    } else if (price.length === 0) {
      setError("Product price is required");
      return;
    } else if (price < 0) {
      setError("product price cannot be negative");
      return;
    } else if (isNaN(price)) {
      setError("Product price must be a number");
      return;
    } else if (isNaN(quantity)) {
      setError("Product quantity must be a number");
      return;
    } else if (quantity.length === 0) {
      setError("Product quantity is required");
      return;
    }
     else if (quantity< 0) {
      setError("Product Quantity cannot be negative");
      return;
    }
    handleAddProducts(newProduct);
  };
  return (
    <div>
      <form onSubmit={handleProductsSubmit}>
        <input
          type="text"
          name="name"
          className="input mb-3"
          placeholder="Enter Product Name"
        />
        <br />
        <input
          type="number"
          name="price"
          className="input mb-3"
          placeholder="Enter the Product Price"
        />
        <br />
        <input
          type="number"
          name="quantity"
          className="input mb-3"
          placeholder="Enter Product Quantity"
        />
        <br />
        <input type="submit" className="btn " value="Submit" />
      </form>
      <p className="text-red-400">
        <small>{error}</small>
      </p>
    </div>
  );
};
export default ProductForm;
