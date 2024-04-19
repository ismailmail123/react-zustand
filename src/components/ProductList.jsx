// ProductList.js
import React, { useState } from 'react';
import useProductStore from '../store/useProductStore';
import EditProductForm from '../components/EditProduct';

const ProductList = () => {
    const products = useProductStore((state) => state.products);
    const selectedProducts = useProductStore((state) => state.selectedProducts);
    const deleteProduct = useProductStore((state) => state.deleteProduct);
    const [selectedProduct, setSelectedProduct] = useState(null);
    
    const toggleProductSelection = useProductStore(
      (state) => state.toggleProductSelection
    );
    const deleteSelectedProducts = useProductStore(
      (state) => state.deleteSelectedProducts
    );
    const deleteAllProducts = useProductStore((state) => state.deleteAllProducts);
  
    const handleCheckboxChange = (productId) => {
      toggleProductSelection(productId);
    };
  
    const handleSelectAllChange = () => {
      const allProductsSelected = selectedProducts.length === products.length;
      if (allProductsSelected) {
        deleteAllProducts();
      } else {
        products.forEach((product) => toggleProductSelection(product.id));
      }
    };

    const handleUpdateClick = (product) => {
        setSelectedProduct(product);
      };
    
  
    return (
      <div>
        <div>
          <input
            type="checkbox"
            checked={selectedProducts.length === products.length}
            onChange={handleSelectAllChange}
          />
          <span>Select All</span>
        </div>
        {products.map((product) => (
          <div key={product.id}>
            <input
              type="checkbox"
              checked={selectedProducts.includes(product.id)}
              onChange={() => handleCheckboxChange(product.id)}
            />
            <span>{product.name} - ${product.price}</span>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          <button onClick={() => handleUpdateClick(product)}>Update</button>
          {selectedProduct && selectedProduct.id === product.id && (
            <EditProductForm product={selectedProduct} />
          )}
          </div>
        ))}
        <button onClick={deleteSelectedProducts}>Delete Selected</button>
        <button onClick={deleteAllProducts}>Delete All Selected</button>
      </div>
    );
};

export default ProductList;
