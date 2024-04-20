// AddProductForm.js
import React, { useState } from 'react';
import useProductStore from '../store/useProductStore';

const AddProductForm = () => {
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
    <div className='add-form'>
    <form onSubmit={handleSubmit}>
      <label>Product Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
      />
      <label>Price</label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <button type="submit">Add Product</button>
    </form>
    </div>
  );
};

export default AddProductForm;
