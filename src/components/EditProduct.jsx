// UpdateProductForm.js
import React, { useState } from 'react';
import useProductStore from '../store/useProductStore';

const UpdateProductForm = ({ product, open, setOpen }) => {
  const updateProduct = useProductStore((state) => state.updateProduct);
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct({ ...product, name, price: parseFloat(price) });
    setOpen(false)
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setOpen(false)
  }

  return (
    
    
<div className='modal'>
<form >
  <label>Product Name : </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
      />
      <label>Price : </label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <div>
      <button onClick={handleCancel} className='update' type="submit">cencel</button>
      <button onClick={handleSubmit} className='update' type="submit">Update Product</button>
      </div>
      
    </form>
   
    </div> 
      
    
  );
};

export default UpdateProductForm;
