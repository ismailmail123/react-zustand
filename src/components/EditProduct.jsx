// ProductForm.js
import React, { useState } from 'react';
import useProductStore from '../store/useProductStore';

const ProductForm = () => {
  const addProduct = useProductStore((state) => state.addProduct);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) return;
    addProduct({ id: Date.now(), name, price: parseFloat(price) });
    setName('');
    setPrice('');
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
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
