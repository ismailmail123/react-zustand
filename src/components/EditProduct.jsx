// UpdateProductForm.js
import React, { useState } from 'react';
import useProductStore from '../store/useProductStore';

const UpdateProductForm = ({ product }) => {
  const updateProduct = useProductStore((state) => state.updateProduct);
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct({ ...product, name, price: parseFloat(price) });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <button type="submit">Update Product</button>
    </form>
  );
};

export default UpdateProductForm;
