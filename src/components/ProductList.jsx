// ProductList.js
import React, { useState } from "react";
import useProductStore from "../store/useProductStore";
import EditProductForm from "../components/EditProduct";

const ProductList = () => {
  const products = useProductStore((state) => state.products);
  const selectedProducts = useProductStore((state) => state.selectedProducts);
  const deleteProduct = useProductStore((state) => state.deleteProduct);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);



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
    setOpen(true);
  };

  const locale = "id-ID";
  const option = {
    style: "currency",
    currency: "IDR",
  };

  return (
    <div className="product">
      {
        products.length <= 1 ? ("") : (
          <div className="select-all">
        <input
          type="checkbox"
          checked={selectedProducts.length === products.length}
          onChange={handleSelectAllChange}
          style={{ marginRight: "10px", marginLeft: "-30px" }}
        />

        <span>Select All</span>
      </div>
        )
      }
      
      {products.map((product) => (
        <>
          <div className="product-list" key={product.id}>
            <div className="list-item">
              <input
                style={{ marginRight: "10px" }}
                type="checkbox"
                checked={selectedProducts.includes(product.id)}
                onChange={() => handleCheckboxChange(product.id)}
              />
              <div className="list">
                <h4>{product.name}</h4>
                <p>
                  Price :{" "}
                  {new Intl.NumberFormat(locale, option).format(product.price)}
                </p>
              </div>
            </div>
            <div>
              <button
                className="delete"
                onClick={() => deleteProduct(product.id)}
              >
                Delete
              </button>
              <button className="update" onClick={() => handleUpdateClick(product)}>Update</button>
            </div>
          </div>
          {selectedProduct && selectedProduct.id === product.id && open && (
            <EditProductForm
              open={open}
              setOpen={setOpen}
              product={selectedProduct}
            />
          )}
        </>
      ))}
      
        {
          products.length !== 0 ? (
            <div  className="button-delete-selected">
<button className="delete" onClick={deleteSelectedProducts}>
          Delete Selected
        </button>
        <button className="delete" onClick={deleteAllProducts}>
          Delete All
        </button>
      </div>
          ) : ("")
        }
        
        
    </div>
  );
};

export default ProductList;
